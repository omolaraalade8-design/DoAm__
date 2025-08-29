import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';
import Mascot from '../shared/Mascot';

interface ChatbotOnboardingProps {
  onComplete: (data: any) => void;
}

const ChatbotOnboarding: React.FC<ChatbotOnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    mainHustle: '',
    bigGoal: '',
    schedule: '',
    reminderStyle: ''
  });
  const [currentAnswer, setCurrentAnswer] = useState('');

  const questions = [
    {
      id: 'mainHustle',
      question: "How far! What's your main hustle right now?",
      placeholder: "School, work, side business, or just life...",
      quickButtons: ['School', 'Work', 'Side Hustle', 'Personal Development']
    },
    {
      id: 'bigGoal',
      question: "What's one big goal you want DoAm in the next 30 days?",
      placeholder: "Be specific... what do you really want to achieve?",
      quickButtons: ['Get fit', 'Launch business', 'Ace exams', 'Learn new skill']
    },
    {
      id: 'schedule',
      question: "How does your daily schedule look like?",
      placeholder: "Morning person? Night owl? Busy weekends?",
      quickButtons: ['Early bird (6-8 AM)', 'Regular hours (9-5)', 'Night owl (after 8 PM)', 'Flexible']
    },
    {
      id: 'reminderStyle',
      question: "How you want DoAm to hype you up?",
      placeholder: "What motivation style works for you?",
      quickButtons: ['Friendly reminder', 'Strict accountability', 'Motivational quotes', 'Just the facts']
    }
  ];

  const currentQuestion = questions[step];

  const handleSend = () => {
    if (currentAnswer.trim()) {
      const newAnswers = { ...answers, [currentQuestion.id]: currentAnswer };
      setAnswers(newAnswers);
      setCurrentAnswer('');
      
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        onComplete(newAnswers);
      }
    }
  };

  const handleQuickButton = (answer: string) => {
    setCurrentAnswer(answer);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-white to-mint-green-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-8">
        <div className="text-center mb-8">
          <Mascot size="lg" expression="excited" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-charcoal-800 mb-2">Let's Set You Up!</h1>
          <p className="text-charcoal-600">Just a few questions to personalize your DoAm experience</p>
          
          <div className="flex justify-center mt-4 space-x-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index <= step ? 'bg-mint-green-400' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="bg-mint-green-50 p-6 rounded-2xl mb-6">
          <div className="flex items-start space-x-4">
            <Mascot size="sm" expression="thinking" />
            <div className="flex-1">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <p className="text-lg font-medium text-charcoal-800">
                  {currentQuestion.question}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {currentQuestion.quickButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => handleQuickButton(button)}
              className={`p-3 rounded-xl border-2 transition-all duration-300 text-left ${
                currentAnswer === button
                  ? 'border-mint-green-400 bg-mint-green-50 text-mint-green-700'
                  : 'border-mint-green-200 hover:border-mint-green-300 hover:bg-mint-green-50'
              }`}
            >
              <span className="font-medium text-charcoal-800">{button}</span>
            </button>
          ))}
        </div>

        {/* Text Input */}
        <div className="flex space-x-4">
          <input
            type="text"
            value={currentAnswer}
            onChange={(e) => setCurrentAnswer(e.target.value)}
            placeholder={currentQuestion.placeholder}
            className="flex-1 px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!currentAnswer.trim()}
            className="bg-mint-green-400 hover:bg-mint-green-500 disabled:bg-gray-200 disabled:text-gray-400 text-charcoal-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            {step < questions.length - 1 ? <Send className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-charcoal-500">
            Step {step + 1} of {questions.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatbotOnboarding;