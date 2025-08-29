export const motivationalTexts = [
  "How far? You don DoAm today?",
  "Oya, no time to slack, just DoAm.",
  "No wahala, DoAm will remind you.",
  "Dragging today? Abeg, DoAm sharp sharp.",
  "Small small, you go DoAm finish.",
  "No need to overthink — plan am, DoAm.",
  "E easy if you DoAm one step at a time.",
  "Procrastination no be your mate — DoAm now.",
  "How's your hustle going? DoAm helps balance it all.",
  "From 'I go do am' to 'I don DoAm' — steady levels.",
  "Chop knuckle for every task wey you Do.",
  "Your squad dey wait for proof — DoAm sharp.",
  "Make e no be story! DoAm sharp sharp.",
  "You get this! No give up, just DoAm.",
  "Wetin you dey wait for? DoAm now!",
  "Success na small small — DoAm your part today.",
  "No let excuses stop you — DoAm sharp!",
  "Your future self go thank you — DoAm now.",
  "Hustle hard, DoAm harder!",
  "Time no dey wait for person — DoAm quick!",
  "You be champion — show yourself!",
  "DoAm like your life depend on am!"
];

export const greetings = [
  "How far? Ready to crush your goals?",
  "Wetin dey happen? Let's DoAm today!",
  "My guy! Time to show these tasks who's boss.",
  "Babe! Ready to slay your to-do list?",
  "Boss! Your hustle dey call you.",
  "Champ! Make we DoAm scatter today.",
  "Omo! You don ready to fire today?",
  "Legend! Your goals no go achieve themselves oh.",
  "Star! Time to shine with your DoAm power.",
  "Hero! Your mission await you today.",
  "Chief! Your empire dey wait for you.",
  "Warrior! Battle these tasks and win!"
];

export const celebrations = [
  "Chop knuckle! 🙌",
  "You too much! 🔥", 
  "Na you be this! 💪",
  "Steady levels! ⭐",
  "DoAm master! 🏆",
  "No dull yourself! 🎉",
  "You scatter am! ⚡",
  "Outstanding! 👑",
  "You don show them! 🚀",
  "Correct person! ✨",
  "Champion things! 🥇",
  "E sweet me! 😍",
  "You no go kill person! 😄",
  "Wahala dey! 🔥💯"
];

export const taskReminders = [
  "Oya, DoAm this task sharp sharp!",
  "Your goal dey call you — answer am!",
  "No time to drag, DoAm now!",
  "Make this task no scatter — DoAm am!",
  "You fit DoAm this one with your eyes closed!",
  "Small work, big result — DoAm!",
  "Your future self dey beg you — DoAm now!",
  "No let this task stress you — just DoAm!"
];

export const progressEncouragement = [
  "You dey move! Continue like this.",
  "Small small, you dey reach your goal.",
  "Every DoAm na step closer to success.",
  "You no be learner again — you don grow!",
  "See as you dey consistent — I hail!",
  "Your progress sweet me — continue!",
  "You don pass your old self — congratulations!"
];

export const getRandomText = (texts: string[]): string => {
  return texts[Math.floor(Math.random() * texts.length)];
};

export const getRandomMotivation = () => getRandomText(motivationalTexts);
export const getRandomGreeting = () => getRandomText(greetings);
export const getRandomCelebration = () => getRandomText(celebrations);
export const getRandomTaskReminder = () => getRandomText(taskReminders);
export const getRandomProgressEncouragement = () => getRandomText(progressEncouragement);

// Contextual microcopy based on time of day
export const getTimeBasedGreeting = (): string => {
  const hour = new Date().getHours();
  
  if (hour < 12) {
    return getRandomText([
      "Good morning! Ready to DoAm today?",
      "Morning champion! Your goals dey wait.",
      "Early bird! Time to catch your success.",
      "Rise and DoAm! Today na your day."
    ]);
  } else if (hour < 18) {
    return getRandomText([
      "Afternoon warrior! How far with your tasks?",
      "Midday energy! DoAm something great now.",
      "Afternoon boss! Your hustle dey call you.",
      "How's your day going? Time to DoAm more!"
    ]);
  } else {
    return getRandomText([
      "Evening champion! Finish strong today.",
      "Night owl! Your goals no dey sleep.",
      "Evening star! DoAm one more before bed.",
      "Wrap up strong! DoAm like the boss you are."
    ]);
  }
};

// Achievement-specific celebrations
export const getAchievementCelebration = (achievementType: string): string => {
  switch (achievementType) {
    case 'streak':
      return getRandomText([
        "Streak master! You no dey joke with consistency!",
        "Fire! Your streak game strong die!",
        "Consistency na your middle name! 🔥"
      ]);
    case 'completion':
      return getRandomText([
        "Task terminator! You don clear everything!",
        "Completion king/queen! Outstanding!",
        "You finish all? Respect! 👑"
      ]);
    case 'community':
      return getRandomText([
        "Squad leader! Your team lucky to have you!",
        "Community champion! You dey inspire others!",
        "Team player extraordinaire! 🤝"
      ]);
    default:
      return getRandomCelebration();
  }
};