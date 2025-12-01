'use client';

import { useEffect } from 'react';

interface InterludeProps {
  onComplete: () => void;
  text: string;
  duration?: number;
}

const Interlude = ({ onComplete, text, duration = 5000 }: InterludeProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="flex-grow flex flex-col justify-center items-center p-8 animate-in fade-in duration-1000">
      <div className="max-w-3xl w-full bg-black border-4 border-white p-8 text-center relative">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1"></div>

        {/* Content */}
        <div className="mb-6">
           <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 uppercase tracking-widest border-b-2 border-white pb-2 inline-block">
             REPORT FROM THE PROVINCES
           </h2>
        </div>
        
        {/* Image Placeholder */}
        <div className="w-full h-48 md:h-64 bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-6 relative overflow-hidden">
             <p className="text-gray-500 font-mono text-sm">SCENE ANIMATION PLACEHOLDER</p>
             {/* Use a generic source or logic to switch based on text content if needed, or user can update later */}
             <img 
               src="/images/interlude-scene.gif" 
               alt="Interlude Scene" 
               className="absolute inset-0 w-full h-full object-cover opacity-0" // Hidden until image exists
               onError={(e) => e.currentTarget.style.display = 'none'}
             />
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 font-mono leading-relaxed mb-6">
          {text}
        </p>

        <div className="w-full bg-gray-900 h-1 mt-4 overflow-hidden">
           <div 
             className="h-full bg-white animate-[progress_10s_linear_forwards]"
             style={{ animationDuration: `${duration}ms` }}
           />
        </div>
      </div>
    </div>
  );
};

export default Interlude;
