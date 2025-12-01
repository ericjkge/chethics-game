'use client';

import { Choice } from '../types/game';

interface ChoiceButtonProps {
  choice: Choice;
  onSelect: (choice: Choice) => void;
}

export default function ChoiceButton({ choice, onSelect }: ChoiceButtonProps) {
  return (
    <button
      onClick={() => onSelect(choice)}
      className="w-full h-full flex flex-col bg-black border-4 border-gray-600 hover:border-white p-3 text-left transition-none group relative overflow-hidden"
    >
      {/* Selection Indicator */}
      <div className="absolute left-2 top-3 opacity-0 group-hover:opacity-100 text-white text-base font-bold">
        ▶
      </div>

      <div className="pl-5 w-full flex flex-col h-full">
        <h3 className="text-lg font-bold text-yellow-400 mb-1 group-hover:text-white group-hover:underline decoration-4 underline-offset-4 uppercase leading-tight flex-shrink-0">
          {choice.title}
        </h3>
        <div className="flex-grow flex items-start overflow-y-auto min-h-0 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent pr-1">
            <p className="text-gray-300 text-base leading-snug font-mono">
              {choice.description}
            </p>
        </div>
      </div>
      
      {/* Payoffs removed as per request - shown after selection */}
    </button>
  );
}
