import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, CheckSquare, Calendar, Target } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomMotivation, getRandomCelebration } from '../../utils/microcopy';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
  actions?: {
    type: 'create_task' | 'schedule_event' | 'set_goal';
    data: any;
  }[];
}

interface AIAssistantProps {
  onCreateTask?: (task: any) => void;
  onScheduleEvent?: (event: any) => void;
  onSetGoal?: (goal: any) => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ 
  onCreateTask, 
  onScheduleEvent, 
  onSetGoal 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: `${getRandomMotivation()} How can I help you DoAm today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = (userMessage: string): { content: string; actions?: any[] } => {
    const message = userMessage.toLowerCase();
    
    // Task creation patterns
    if (message.includes('create') || message.includes('add') || message.includes('task') || message.includes('todo')) {
      const taskMatch = userMessage.match(/(?:create|add|task|todo).*?([^.!?]+)/i);
      const taskTitle = taskMatch ? taskMatch[1].trim() : userMessage;
      
      return {
        content: `No wahala! I don create the task "${taskTitle}" for you. ${getRandomCelebration()}`,
        actions: [{
          type: 'create_task',
          data: {
            title: taskTitle,
            category: 'Personal',
            priority: 'Medium',
            completed: false
          }
        }]
      };
    }
    
    // Schedule/calendar patterns
    if (message.includes('schedule') || message.includes('calendar') || message.includes('meeting') || message.includes('appointment')) {
      const eventMatch = userMessage.match(/(?:schedule|calendar|meeting|appointment).*?([^.!?]+)/i);
      const eventTitle = eventMatch ? eventMatch[1].trim() : userMessage;
      
      return {
        content: `Sharp! I don schedule "${eventTitle}" for you. Check your calendar to confirm the time. ⏰`,
        actions: [{
          type: 'schedule_event',
          data: {
            title: eventTitle,
            date: new Date().toISOString().split('T')[0],
            time: '10:00',
            category: 'Personal'
          }
        }]
      };
    }
    
    // Goal setting patterns
    if (message.includes('goal') || message.includes('achieve') || message.includes('target') || message.includes('want to')) {
      const goalMatch = userMessage.match(/(?:goal|achieve|target|want to).*?([^.!?]+)/i);
      const goalTitle = goalMatch ? goalMatch[1].trim() : userMessage;
      
      return {
        content: `Oya! Your goal "${goalTitle}" don set. I go help you break am down into small tasks. ${getRandomCelebration()}`,
        actions: [{
          type: 'set_goal',
          data: {
            title: goalTitle,
            deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            category: 'Personal'
          }
        }]
      };
    }
    
    // Motivational responses
    const motivationalResponses = [
      "You dey do well! Keep pushing, no give up. What else you wan DoAm today?",
      "Small small, you go reach your goal. Wetin be the next step?",
      "I see say you serious about your hustle! How I fit help you more?",
      "Your consistency dey inspire me! What other task you get?",
      "No wahala, we go DoAm together! Tell me wetin you need.",
      "You be champion! How I fit support your next move?",
      "E sweet me say you dey committed! What's next on your list?",
      "Your progress dey show! How I fit help you level up more?"
    ];
    
    return {
      content: motivationalResponses[Math.floor(Math.random() * motivationalResponses.length)]
    };
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = generateAIResponse(input);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse.content,
        timestamp: new Date(),
        actions: aiResponse.actions
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);

      // Execute actions
      if (aiResponse.actions) {
        aiResponse.actions.forEach(action => {
          switch (action.type) {
            case 'create_task':
              onCreateTask?.(action.data);
              break;
            case 'schedule_event':
              onScheduleEvent?.(action.data);
              break;
            case 'set_goal':
              onSetGoal?.(action.data);
              break;
          }
        });
      }
    }, 1000 + Math.random() * 1000);
  };

  const quickActions = [
    { text: "Create a task for today", icon: CheckSquare },
    { text: "Schedule my workout", icon: Calendar },
    { text: "Set a 30-day goal", icon: Target },
    { text: "Help me plan my week", icon: Sparkles }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-mint-green-100 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-mint-green-100">
        <div className="flex items-center space-x-3">
          <Mascot size="sm" expression="thinking" />
          <div>
            <h3 className="font-bold text-charcoal-800">DoAm AI Assistant</h3>
            <p className="text-xs text-mint-green-600">Your productivity hype buddy</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-96">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
              message.type === 'user' 
                ? 'bg-blue-500 text-white' 
                : 'bg-mint-green-50 text-charcoal-800 border border-mint-green-200'
            }`}>
              <div className="flex items-start space-x-2">
                {message.type === 'ai' && <Bot className="w-4 h-4 mt-1 text-mint-green-600" />}
                {message.type === 'user' && <User className="w-4 h-4 mt-1" />}
                <p className="text-sm">{message.content}</p>
              </div>
              
              {message.actions && (
                <div className="mt-2 space-y-1">
                  {message.actions.map((action, index) => (
                    <div key={index} className="text-xs bg-mint-green-100 text-mint-green-700 px-2 py-1 rounded-lg">
                      {action.type === 'create_task' && '✓ Task created'}
                      {action.type === 'schedule_event' && '📅 Event scheduled'}
                      {action.type === 'set_goal' && '🎯 Goal set'}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-mint-green-50 border border-mint-green-200 px-4 py-3 rounded-2xl">
              <div className="flex items-center space-x-2">
                <Bot className="w-4 h-4 text-mint-green-600" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-mint-green-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-mint-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-mint-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-mint-green-100">
        <div className="grid grid-cols-2 gap-2 mb-4">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setInput(action.text)}
              className="flex items-center space-x-2 p-2 text-xs bg-mint-green-50 hover:bg-mint-green-100 text-charcoal-700 rounded-lg transition-colors"
            >
              <action.icon className="w-3 h-3" />
              <span>{action.text}</span>
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tell me wetin you wan DoAm..."
            className="flex-1 px-3 py-2 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400 text-sm"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className="bg-mint-green-400 hover:bg-mint-green-500 disabled:bg-gray-300 text-charcoal-800 p-2 rounded-xl transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;