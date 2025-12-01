'use client';

import { useGameState } from './hooks/useGameState';
import { getScenarioById } from './data/scenarios';
import StatsDisplay, { STAT_LABELS } from './components/StatsDisplay';
import ScenarioCard from './components/ScenarioCard';
import ChoiceButton from './components/ChoiceButton';
import Interlude from './components/Interlude';

export default function Home() {
  const { gameState, makeChoice, continueGame, endInterlude } = useGameState();
  const currentScenario = getScenarioById(gameState.currentScenarioId);
  
  if (!currentScenario && !gameState.activeChoice && !gameState.isInterlude) {
    return (
      <div className="h-screen w-screen bg-gray-900 flex items-center justify-center overflow-hidden">
        <div className="text-white p-8 text-2xl font-bold border-4 border-white bg-black">
          END OF DEMO CARTRIDGE
        </div>
      </div>
    );
  }

  const isResultPhase = !!gameState.activeChoice;

  return (
    <div className="h-screen w-screen bg-gray-900 font-pixel flex flex-col overflow-hidden">
      {/* Game Title - Reduced size and margins */}
      <div className="flex-shrink-0 text-center py-4 border-b-4 border-double border-white bg-gray-900 z-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase">
          THE RULER'S PATH
        </h1>
      </div>

      {/* Main Game Container - Flex column to fill remaining height */}
      <div className="flex-grow flex flex-col max-w-7xl mx-auto w-full px-4 py-4 overflow-hidden">
        
        {gameState.isInterlude ? (
          <Interlude 
             text="Your ministers pass on a note from local nobles, who state that the peasants are becoming lazy and uncooperative, demanding more and more without producing the necessary outputs."
             onComplete={endInterlude}
          />
        ) : (
          <>
            {/* Top: Scenario Description - Scrollable if needed but constrained */}
            {currentScenario && (
              <div className="flex-shrink-0 mb-4">
                <ScenarioCard scenario={currentScenario} />
              </div>
            )}

            {/* Middle: Choices or Results - Flex grow to take available space */}
            <div className="flex-grow flex flex-col justify-center min-h-0 mb-4">
              {!isResultPhase && currentScenario ? (
                <div className="flex flex-col justify-center h-full">
                  {/* Fixed grid height to ensure buttons are same size */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full max-h-[60vh]">
                    {currentScenario.choices.map((choice) => (
                      <ChoiceButton
                        key={choice.id}
                        choice={choice}
                        onSelect={makeChoice}
                      />
                    ))}
                  </div>
                </div>
              ) : gameState.activeChoice ? (
                <div className="h-full flex flex-col justify-center items-center bg-black border-4 border-white p-4">
                  <h2 className="text-2xl font-bold text-green-500 mb-2 uppercase tracking-widest flex-shrink-0">
                    DECISION RECORDED
                  </h2>
                  
                  <div className="mb-4 text-center overflow-y-auto min-h-0 flex-shrink">
                    <h3 className="text-lg text-yellow-400 font-bold mb-2">{gameState.activeChoice.title}</h3>
                    <p className="text-gray-300 font-mono mb-4 text-sm leading-snug">{gameState.activeChoice.description}</p>
                    
                    {/* Removed divider line to save space */}
                    <div className="pt-2">
                      <h4 className="text-white text-sm mb-2 uppercase tracking-wider">Consequences</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {gameState.activeChoice.effects.length > 0 ? (
                          gameState.activeChoice.effects.map((effect, index) => {
                            const isPositive = effect.change > 0;
                            return (
                              <div
                                key={index}
                                className={`px-2 py-0.5 text-xs font-bold border ${
                                  isPositive
                                    ? 'bg-green-900 text-green-300 border-green-500'
                                    : 'bg-red-900 text-red-300 border-red-500'
                                }`}
                              >
                                 {isPositive ? '+' : ''}{effect.change} {STAT_LABELS[effect.stat]}
                              </div>
                            );
                          })
                        ) : (
                          <div className="px-2 py-0.5 text-xs font-bold border border-gray-600 text-white bg-gray-800">
                            N/A
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-2">
                    <button
                      onClick={continueGame}
                      className="bg-white text-black font-bold text-lg py-1.5 px-6 border-4 border-gray-400 hover:bg-gray-200 hover:border-white uppercase tracking-widest"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              ) : null}
            </div>

            {/* Bottom: Stats Display - Fixed at bottom */}
            <div className="flex-shrink-0">
              <StatsDisplay stats={gameState.stats} />
            </div>
          </>
        )}
        
      </div>
    </div>
  );
}
