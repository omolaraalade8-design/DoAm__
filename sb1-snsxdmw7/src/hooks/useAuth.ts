import { useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';
import { getUserProfile, createUserProfile } from '../lib/userProfile';
import type { User } from '@supabase/supabase-js';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Skip auth setup if Supabase not configured
    if (!isSupabaseConfigured()) {
      console.log('Supabase not configured, skipping auth setup');
      setLoading(false);
      return;
    }

    console.log('Setting up Supabase auth...');

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session:', session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log('Auth state change:', event, session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }

    console.log('Attempting Google sign-in...');
    
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        }
      }
    });
    
    console.log('Google sign-in result:', { data, error });
    if (error) throw error;
  };

  const signInWithEmail = async (email: string, password: string) => {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }

    console.log('Attempting email sign-in for:', email);
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    
    console.log('Email sign-in result:', { data, error });
    if (error) throw error;
  };

  const signUpWithEmail = async (email: string, password: string, name: string) => {
    if (!isSupabaseConfigured()) {
      throw new Error('Supabase not configured');
    }

    console.log('Attempting email sign-up for:', email);
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name: name
        },
        emailRedirectTo: `${window.location.origin}/auth/callback`
      }
    });
    
    console.log('Email sign-up result:', { data, error });
    if (error) throw error;
    
    // Create user profile for new user
    if (data.user) {
      try {
        await createUserProfile(data.user.id, {
          name: name,
          email: email
        });
      } catch (profileError) {
        console.error('Error creating user profile:', profileError);
      }
    }
  };

  const signOut = async () => {
    if (!isSupabaseConfigured()) {
      return; // No-op for demo mode
    }

    console.log('Signing out...');
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  return {
    user,
    loading,
    signInWithGoogle,
    signInWithEmail,
    signUpWithEmail,
    signOut
  };
};