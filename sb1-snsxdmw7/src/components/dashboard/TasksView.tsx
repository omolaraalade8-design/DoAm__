import React, { useState } from 'react';
import { Plus, Filter, Search } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomCelebration } from '../../utils/microcopy';

const TasksView: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete project proposal", completed: false, category: "Work", priority: "High" },
    { id: 2, title: "Morning workout", completed: true, category: "Personal", priority: "Medium" },
    { id: 3, title: "Study for exam", completed: false, category: "School", priority: "High" },
    { id: 4, title: "Client call at 3pm", completed: false, category: "Side Hustle", priority: "Low" },
    { id: 5, title: "Buy groceries", completed: false, category: "Personal", priority: "Low" },
  ]);

  const [newTask, setNewTask] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Work');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        completed: false,
        category: selectedCategory,
        priority: 'Medium'
      }]);
      setNewTask('');
    }
  };

  const categories = ['Work', 'School', 'Side Hustle', 'Personal'];
  const priorityColors = {
    High: 'bg-red-100 text-red-700',
    Medium: 'bg-yellow-100 text-yellow-700', 
    Low: 'bg-green-100 text-green-700'
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Tasks</h1>
          <Mascot size="sm" expression="thinking" />
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-white border border-mint-green-200 px-4 py-2 rounded-xl hover:bg-mint-green-50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          
          <button className="flex items-center space-x-2 bg-white border border-mint-green-200 px-4 py-2 rounded-xl hover:bg-mint-green-50 transition-colors">
            <Search className="w-4 h-4" />
            <span>Search</span>
          </button>
        </div>
      </div>
      
      {/* Add Task */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 mb-8">
        <h2 className="text-lg font-semibold text-charcoal-800 mb-4">Add New Task</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Wetin you wan DoAm today?"
            className="flex-1 px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
            onKeyPress={(e) => e.key === 'Enter' && addTask()}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            onClick={addTask}
            className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center space-x-2"
          >
            <Plus className="w-5 h-5" />
            <span>DoAm!</span>
          </button>
        </div>
      </div>
      
      {/* Tasks List */}
      <div className="grid gap-4">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white p-4 rounded-2xl shadow-lg border border-mint-green-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-6 h-6 text-mint-green-600 border-mint-green-300 rounded focus:ring-mint-green-500"
              />
              
              <div className="flex-1">
                <p className={`font-medium ${task.completed ? 'line-through text-charcoal-400' : 'text-charcoal-800'}`}>
                  {task.title}
                </p>
                <div className="flex items-center space-x-3 mt-1">
                  <span className="text-xs bg-mint-green-100 text-mint-green-700 px-2 py-1 rounded-full font-medium">
                    {task.category}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${priorityColors[task.priority as keyof typeof priorityColors]}`}>
                    {task.priority}
                  </span>
                </div>
              </div>
              
              {task.completed && (
                <div className="text-right">
                  <p className="text-sm font-semibold text-mint-green-600">{getRandomCelebration()}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {tasks.length === 0 && (
        <div className="text-center py-12">
          <Mascot size="lg" expression="thinking" className="mx-auto mb-4" />
          <p className="text-xl text-charcoal-600 mb-2">No tasks yet!</p>
          <p className="text-charcoal-500">Add your first task above and start your DoAm journey.</p>
        </div>
      )}
    </div>
  );
};

export default TasksView;