import React, { useState } from 'react';
import { Upload, Camera, Link, FileText, Heart, MessageCircle } from 'lucide-react';
import Mascot from '../shared/Mascot';
import { getRandomCelebration } from '../../utils/microcopy';

const ProofView: React.FC = () => {
  const [proofs] = useState([
    {
      id: 1,
      title: "Morning workout complete!",
      description: "30 minutes of cardio DoAm'd 💪",
      type: "image",
      timestamp: "2 hours ago",
      likes: 12,
      comments: 3,
      author: "You"
    },
    {
      id: 2,
      title: "Project milestone achieved",
      description: "Frontend design completed ahead of deadline",
      type: "document",
      timestamp: "1 day ago", 
      likes: 8,
      comments: 2,
      author: "You"
    }
  ]);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold text-charcoal-800">Proof</h1>
          <Mascot size="sm" expression="cheering" />
        </div>
      </div>
      
      {/* Upload Section */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 mb-8">
        <h2 className="text-xl font-semibold text-charcoal-800 mb-6">Share Your Progress</h2>
        
        <div className="border-2 border-dashed border-mint-green-300 rounded-2xl p-8 text-center mb-6 hover:border-mint-green-400 transition-colors">
          <Upload className="w-12 h-12 text-mint-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-charcoal-800 mb-2">Upload Your Proof</h3>
          <p className="text-charcoal-600 mb-4">Drag & drop or click to upload photos, videos, documents</p>
          
          <div className="flex justify-center space-x-4">
            <button className="flex items-center space-x-2 bg-mint-green-100 text-mint-green-700 px-4 py-2 rounded-lg hover:bg-mint-green-200 transition-colors">
              <Camera className="w-4 h-4" />
              <span>Photo</span>
            </button>
            <button className="flex items-center space-x-2 bg-bright-blue-100 text-bright-blue-700 px-4 py-2 rounded-lg hover:bg-bright-blue-200 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Document</span>
            </button>
            <button className="flex items-center space-x-2 bg-cream-200 text-charcoal-700 px-4 py-2 rounded-lg hover:bg-cream-300 transition-colors">
              <Link className="w-4 h-4" />
              <span>Link</span>
            </button>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="What did you DoAm? (optional description)"
            className="flex-1 px-4 py-3 border border-mint-green-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mint-green-400"
          />
          <button className="bg-mint-green-400 hover:bg-mint-green-500 text-charcoal-800 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
            Share Proof
          </button>
        </div>
      </div>
      
      {/* Proof History */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-charcoal-800">Your DoAm History</h2>
        
        {proofs.map((proof) => (
          <div key={proof.id} className="bg-white p-6 rounded-2xl shadow-lg border border-mint-green-100 hover:shadow-xl transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-mint-green-400 rounded-full flex items-center justify-center">
                {proof.type === 'image' ? <Camera className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-charcoal-800">{proof.title}</h3>
                  <span className="text-sm text-charcoal-500">{proof.timestamp}</span>
                </div>
                
                <p className="text-charcoal-600 mb-4">{proof.description}</p>
                
                {proof.type === 'image' && (
                  <div className="bg-gray-200 h-32 rounded-xl mb-4"></div>
                )}
                
                <div className="flex items-center space-x-6">
                  <button className="flex items-center space-x-2 text-charcoal-600 hover:text-mint-green-600 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{proof.likes} likes</span>
                  </button>
                  
                  <button className="flex items-center space-x-2 text-charcoal-600 hover:text-bright-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{proof.comments} comments</span>
                  </button>
                  
                  <div className="flex-1 text-right">
                    <span className="bg-mint-green-100 text-mint-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {getRandomCelebration()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProofView;