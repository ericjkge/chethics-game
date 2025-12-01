'use client';

import { GameStats } from '../types/game';

interface StatsDisplayProps {
  stats: GameStats;
}

export const STAT_LABELS: { [K in keyof GameStats]: string } = {
  populace: 'POPULACE',
  aristocracy: 'ARISTOCRACY',
  military: 'MILITARY',
  deterrence: 'DETERRENCE',
  diplomacy: 'DIPLOMACY',
  efficiency: 'EFFICIENCY',
};

export default function StatsDisplay({ stats }: StatsDisplayProps) {
  // Filter out legacy from display stats
  const displayStats = Object.keys(stats).filter(key => key !== 'legacy') as Array<keyof GameStats>;

  return (
    <div className="bg-black border-4 border-white p-4 shadow-none">
      <h2 className="text-base font-bold text-white mb-3 text-center border-b-2 border-white pb-2 tracking-widest">
        STATE METRICS
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {displayStats.map((statKey) => {
          const value = stats[statKey];
          const label = STAT_LABELS[statKey];
          
          // Retro color palette
          let barColor = 'bg-green-600';
          if (value < 30) barColor = 'bg-red-600';
          else if (value < 50) barColor = 'bg-yellow-600';
          
          // Calculate number of "blocks" (10 blocks total, each represents 10 units)
          const totalBlocks = 10;
          const filledBlocks = Math.floor(value / 10);
          
          return (
            <div key={statKey} className="space-y-1 border border-gray-800 p-2">
              <div className="flex justify-between text-sm md:text-base font-bold">
                <span className="text-gray-300 uppercase truncate mr-1">{label}</span>
                <span className="text-white">{value}</span>
              </div>
              {/* Pixelated Bar Container */}
              <div className="w-full bg-gray-900 h-4 border border-gray-600 flex gap-px">
                {Array.from({ length: totalBlocks }).map((_, i) => (
                  <div 
                    key={i}
                    className={`flex-1 ${i < filledBlocks ? barColor : 'bg-transparent'} ${i < filledBlocks ? 'border-r border-black last:border-0' : 'border-r border-gray-800 last:border-0'}`}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
