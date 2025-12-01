'use client';

import { PhilosopherAlignment } from '../types/game';
import { PHILOSOPHERS } from '../data/philosophers';

interface PhilosopherAlignmentProps {
  alignment: PhilosopherAlignment;
}

export default function PhilosopherAlignmentDisplay({ alignment }: PhilosopherAlignmentProps) {
  const maxScore = Math.max(...Object.values(alignment), 1);
  
  return (
    <div className="bg-black border-4 border-white p-4 mt-6">
      <h2 className="text-2xl font-bold text-white mb-4 text-center border-b-4 border-white pb-2 tracking-widest">
        ALIGNMENT
      </h2>
      <div className="space-y-6">
        {PHILOSOPHERS.map((philosopher) => {
          const score = alignment[philosopher.id] || 0;
          const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
          
          return (
            <div key={philosopher.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-yellow-400 font-bold text-xl uppercase">{philosopher.name}</span>
                <span className="text-white font-bold text-xl">{score}</span>
              </div>
              
              {/* Retro Progress Bar */}
              <div className="w-full bg-gray-900 h-4 border-2 border-gray-600 relative">
                <div
                  className="bg-yellow-600 h-full absolute top-0 left-0 border-r-2 border-black"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              
              <p className="text-gray-400 text-lg leading-tight mt-1 font-mono border-l-2 border-gray-700 pl-2">
                {philosopher.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
