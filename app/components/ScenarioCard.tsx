'use client';

import { Scenario } from '../types/game';

interface ScenarioCardProps {
  scenario: Scenario;
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  const isCrisis = scenario.id === 'coup-capital' || scenario.id === 'border-defense';

  return (
    <div className={`bg-black border-4 p-4 relative transition-colors duration-500 ${
      isCrisis ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.5)] animate-[pulse_2s_ease-in-out_infinite]' : 'border-white'
    }`}>
      {/* Decorative corner pixels */}
      <div className={`absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 -mt-1 -ml-1 ${isCrisis ? 'border-red-600' : 'border-white'}`}></div>
      <div className={`absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 -mt-1 -mr-1 ${isCrisis ? 'border-red-600' : 'border-white'}`}></div>
      <div className={`absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 -mb-1 -ml-1 ${isCrisis ? 'border-red-600' : 'border-white'}`}></div>
      <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 -mb-1 -mr-1 ${isCrisis ? 'border-red-600' : 'border-white'}`}></div>

      <div className={`flex flex-col items-center mb-3 border-b-4 border-double pb-2 ${isCrisis ? 'border-red-600' : 'border-white'}`}>
        <div className="text-center">
          <h1 className={`text-xl font-bold mb-0.5 uppercase tracking-widest ${isCrisis ? 'text-red-500' : 'text-white'}`}>
            {isCrisis && <span className="animate-pulse mr-2">⚠</span>}
            {scenario.act}: {scenario.title}
            {isCrisis && <span className="animate-pulse ml-2">⚠</span>}
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
