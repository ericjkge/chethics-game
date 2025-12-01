'use client';

import { useEffect } from 'react';

interface TitleCardProps {
  onComplete: () => void;
  actTitle: string;
  duration?: number;
}

const TitleCard = ({ onComplete, actTitle, duration = 5000 }: TitleCardProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  // Convert "Act II" -> "act2", "Act III" -> "act3"
  const getImageName = (title: string) => {
    if (title === 'Act II') return 'act2_title';
    if (title === 'Act III') return 'act3_title';
    return 'act_title'; // fallback
  };

  return (
    <div className="flex-grow flex flex-col justify-center items-center p-8 animate-in fade-in duration-1000">
      <div className="max-w-4xl w-full bg-black border-4 border-white p-8 text-center relative">
        {/* Decorative corners */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-white -mt-1 -ml-1"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-white -mt-1 -mr-1"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-white -mb-1 -ml-1"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-white -mb-1 -mr-1"></div>

        {/* Image Placeholder */}
        <div className="w-full h-64 md:h-80 bg-gray-800 border-2 border-gray-600 flex items-center justify-center mb-8 relative overflow-hidden">
             <img 
               src={`/images/${getImageName(actTitle)}.png`}
               alt={`${actTitle} Title`}
               className="absolute inset-0 w-full h-full object-contain transition-opacity duration-500"
               style={{ imageRendering: 'pixelated' }}
               onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 const placeholder = document.createElement('p');
                 placeholder.className = 'text-gray-500 font-mono text-sm';
                 placeholder.textContent = 'ACT TITLE ANIMATION PLACEHOLDER';
                 e.currentTarget.parentElement?.appendChild(placeholder);
               }}
             />
        </div>

        {/* Act Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 uppercase tracking-widest mb-4">
          {actTitle}
        </h1>

        {/* Progress Bar */}
        <div className="w-full bg-gray-900 h-1 mt-8 overflow-hidden">
           <div 
             className="h-full bg-white animate-[progress_5s_linear_forwards]"
             style={{ animationDuration: `${duration}ms` }}
           />
        </div>
      </div>
    </div>
  );
};

export default TitleCard;

