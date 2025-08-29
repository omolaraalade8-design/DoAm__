import React from 'react';
import { Instagram, Twitter, MessageCircle } from 'lucide-react';
import Mascot from '../shared/Mascot';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-800 text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Mascot size="sm" />
              <div>
                <h3 className="text-2xl font-bold">DoAm</h3>
                <p className="text-xs text-mint-green-400 font-medium">No excuses.</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The productivity app that gets Nigerian youth. From 'I go do am' to 'I don DoAm.'
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-charcoal-700 p-3 rounded-lg hover:bg-charcoal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-charcoal-700 p-3 rounded-lg hover:bg-charcoal-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-charcoal-700 p-3 rounded-lg hover:bg-charcoal-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Mobile App</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-mint-green-400 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-charcoal-600 mt-12 pt-8 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 DoAm. Made with ❤️ for Nigerian youth.
          </p>
          <p className="text-mint-green-400 font-handwritten text-lg italic">
            "From 'I go do am' to 'I don DoAm.'"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;