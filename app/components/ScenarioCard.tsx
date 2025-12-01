'use client';

import { Scenario } from '../types/game';

interface ScenarioCardProps {
  scenario: Scenario;
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <div className="bg-black border-4 border-white p-4 relative">
      {/* Decorative corner pixels */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white -mt-1 -ml-1"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white -mt-1 -mr-1"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white -mb-1 -ml-1"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white -mb-1 -mr-1"></div>

      <div className="flex flex-col items-center mb-3 border-b-4 border-double border-white pb-2">
        <div className="text-center">
          <h1 className="text-xl font-bold text-white mb-0.5 uppercase tracking-widest">
            {scenario.act}: {scenario.title}
          </h1>
          {scenario.subtitle && (
            <h2 className="text-xl text-gray-400 uppercase tracking-wider">
              {scenario.subtitle}
            </h2>
          )}
        </div>
      </div>
      
      <div className="text-base text-gray-300 leading-snug whitespace-pre-line font-mono text-center max-w-4xl mx-auto">
        <p>{scenario.description}</p>
      </div>
    </div>
  );
}
