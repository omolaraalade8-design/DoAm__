import { supabase, isSupabaseConfigured } from './supabase';

export interface UserProfile {
  id: string;
  user_id: string;
  name?: string;
  email?: string;
  phone?: string;
  onboarding_completed: boolean;
  preferences?: {
    mainHustle?: string;
    bigGoal?: string;
    schedule?: string;
    reminderStyle?: string;
    language?: string;
    timezone?: string;
    theme?: string;
  };
  notifications?: {
    push: boolean;
    email: boolean;
    sms: boolean;
    community: boolean;
  };
  privacy?: {
    profileVisible: boolean;
    progressVisible: boolean;
    allowGroupInvites: boolean;
  };
  created_at?: string;
  updated_at?: string;
}

export const getUserProfile = async (userId: string): Promise<UserProfile | null> => {
  if (!isSupabaseConfigured()) {
    return null;
  }

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        // No profile found, return null
        return null;
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

export const createUserProfile = async (userId: string, profileData: Partial<UserProfile>): Promise<UserProfile> => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase not configured');
  }

  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert({
        user_id: userId,
        onboarding_completed: false,
        notifications: {
          push: true,
          email: false,
          sms: true,
          community: true
        },
        privacy: {
          profileVisible: true,
          progressVisible: true,
          allowGroupInvites: true
        },
        preferences: {
          language: 'pidgin',
          timezone: 'WAT',
          theme: 'light',
          reminderStyle: 'friendly'
        },
        ...profileData
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (userId: string, updates: Partial<UserProfile>): Promise<UserProfile> => {
  if (!isSupabaseConfigured()) {
    throw new Error('Supabase not configured');
  }

  try {
    // First check if profile exists
    let profile = await getUserProfile(userId);
    
    if (!profile) {
      // Create new profile if it doesn't exist
      profile = await createUserProfile(userId, updates);
    } else {
      // Update existing profile
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('user_id', userId)
        .select()
        .single();

      if (error) throw error;
      profile = data;
    }

    return profile;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};