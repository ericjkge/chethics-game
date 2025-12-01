'use client';

import { useGameState } from './hooks/useGameState';
import { getScenarioById } from './data/scenarios';
import StatsDisplay, { STAT_LABELS } from './components/StatsDisplay';
import ScenarioCard from './components/ScenarioCard';
import ChoiceButton from './components/ChoiceButton';
import Interlude from './components/Interlude';
import { ENDINGS } from './data/endings';
import { PhilosopherSchool } from './types/game';

export default function Home() {
  const { gameState, makeChoice, continueGame, endInterlude, resetGame, getSchoolAlignment, startGame } = useGameState();
  const currentScenario = getScenarioById(gameState.currentScenarioId);
  
  // Logic for Start Screen
  if (!gameState.isGameStarted) {
    return (
      <div className="h-screen w-screen bg-gray-900 font-pixel flex flex-col items-center justify-center overflow-hidden p-4">
         <div className="max-w-4xl w-full bg-black border-4 border-white p-8 text-center flex flex-col gap-8 items-center">
            <div className="border-b-4 border-double border-white pb-4 w-full">
                <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest uppercase mb-2">
                  THE RULER'S PATH
                </h1>
                <p className="text-gray-400 text-lg md:text-xl font-mono tracking-wider uppercase">
                  A Philosophical Strategy Game
                </p>
            </div>
            
            <div className="max-w-2xl text-gray-300 font-mono leading-relaxed space-y-4 text-lg">
                <p>
                   The Warring States Period has left the realm fractured. As the newly crowned ruler, your every decision will shape the destiny of your kingdom.
                </p>
                <p>
                   Will you rule with benevolence, strict law, or effortless action?
                </p>
            </div>

            <button 
                onClick={startGame}
                className="mt-8 bg-white text-black font-bold text-2xl py-4 px-12 border-4 border-gray-400 hover:bg-gray-200 hover:border-white uppercase tracking-widest"
            >
                BEGIN REIGN
            </button>
         </div>
      </div>
    );
  }
  
  // Logic for Game End Screen
  if (gameState.currentScenarioId === 'game-end') {
    const schoolAlignment = getSchoolAlignment();
    const schools: PhilosopherSchool[] = ['confucian', 'mohist', 'daoist', 'legalist'];
    
    // Find school with highest score
    let dominantSchool: PhilosopherSchool = 'confucian'; // Default
    let maxScore = -1;
    
    schools.forEach(school => {
      if (schoolAlignment[school] > maxScore) {
        maxScore = schoolAlignment[school];
        dominantSchool = school;
      }
    });
    
    const isHighLegacy = gameState.stats.legacy >= 50;
    const schoolEndings = ENDINGS[dominantSchool];
    const outcome = isHighLegacy ? schoolEndings.highLegacy : schoolEndings.lowLegacy;
    
    // Find specific philosopher variant
    // Logic: Look at philosophers belonging to this school and pick one with highest individual score
    // Mapping school -> philosophers IDs
    const schoolToPhilosophers: Record<PhilosopherSchool, string[]> = {
        confucian: ['confucius', 'xunzi', 'mengzi'],
        mohist: ['mozi'],
        daoist: ['laozi', 'zhuangzi'],
        legalist: ['hanfeizi', 'lordshang']
    };
    
    const philosopherIds = schoolToPhilosophers[dominantSchool];
    let dominantPhilosopherId = philosopherIds[0];
    let maxPhilScore = -1;
    
    philosopherIds.forEach(id => {
        const score = gameState.philosopherAlignment[id] || 0;
        if (score > maxPhilScore) {
            maxPhilScore = score;
            dominantPhilosopherId = id;
        }
    });
    
    const subBlurb = outcome.subBlurbs[dominantPhilosopherId] || outcome.description; // Fallback

    return (
      <div className="h-screen w-screen bg-gray-900 font-pixel flex flex-col items-center justify-center overflow-hidden p-4">
         <div className="max-w-4xl w-full bg-black border-4 border-white p-8 text-center flex flex-col gap-6 max-h-full overflow-y-auto">
            <h1 className={`text-3xl md:text-5xl font-bold tracking-widest uppercase ${isHighLegacy ? 'text-yellow-400' : 'text-gray-400'}`}>
                {outcome.title}
            </h1>
            
            <div className="border-t-2 border-b-2 border-gray-700 py-4">
                <p className="text-xl md:text-2xl text-white leading-relaxed font-mono">
                    {outcome.description}
                </p>
            </div>
            
            <div className="bg-gray-900 p-4 border border-gray-600">
                 <h3 className="text-green-500 font-bold uppercase mb-2 text-sm tracking-wider">Philosopher's Note</h3>
                 <p className="text-lg text-gray-300 italic font-serif">
                    "{subBlurb}"
                 </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm font-mono text-gray-400">
                 <div>FINAL LEGACY: {gameState.stats.legacy}</div>
                 <div className="uppercase">PATH: {dominantSchool}</div>
            </div>

            <button 
                onClick={resetGame}
                className="mt-4 bg-white text-black font-bold text-xl py-3 px-8 border-4 border-gray-400 hover:bg-gray-200 hover:border-white uppercase tracking-widest self-center"
            >
                PLAY AGAIN
            </button>
         </div>
      </div>
    );
  }

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
             text={
               gameState.currentScenarioId === 'military-reform'
                ? "Your ministers pass on a note from local nobles, who state that the peasants are becoming lazy and uncooperative, demanding more and more without producing the necessary outputs."
                : gameState.currentScenarioId === 'corrupt-minister'
                ? "Ministers rush into your office with alarming news: Intelligence suggests that factions of your neighbors are readying an invasion. Scouts have reported word that they have seen armies bearing foreign flags lining up at the outer city gates, and merchants arriving from markets nearby whisper that enemy forces are stockpiling grain and supplies."
                : "One crisp fall morning, you pass away peacefully, accompanied by your family and ministers. You have ruled over a long and tumultuous time, leaving behind a complex and influential legacy. How will you ultimately be remembered?"
             }
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
                    <p className="text-gray-300 font-mono mb-4 text-base leading-snug">{gameState.activeChoice.description}</p>
                    
                    {/* Removed divider line to save space */}
                    <div className="pt-2">
                      <h4 className="text-white text-sm mb-2 uppercase tracking-wider">Consequences</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {gameState.activeChoice.effects.length > 0 ? (
                          gameState.activeChoice.effects.map((effect, index) => {
                            // Skip displaying legacy effect
                            if (effect.stat === 'legacy') return null;
                            
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
