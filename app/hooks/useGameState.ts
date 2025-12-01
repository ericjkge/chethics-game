'use client';

import { useState } from 'react';
import { GameState, GameStats, Choice, PhilosopherSchool } from '../types/game';
import { PHILOSOPHERS } from '../data/philosophers';

const INITIAL_STATS: GameStats = {
  populace: 50,
  aristocracy: 50,
  military: 50,
  deterrence: 50,
  diplomacy: 50,
  efficiency: 50,
  legacy: 50,
};

const INITIAL_PHILOSOPHER_ALIGNMENT = PHILOSOPHERS.reduce((acc, philosopher) => {
  acc[philosopher.id] = 0;
  return acc;
}, {} as { [key: string]: number });

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentScenarioId: 'appointment-of-ministers',
    stats: INITIAL_STATS,
    philosopherAlignment: INITIAL_PHILOSOPHER_ALIGNMENT,
    history: [],
    activeChoice: null,
    isGameStarted: false, // New initial state
  });

  const startGame = () => {
    setGameState(prevState => ({
      ...prevState,
      isGameStarted: true,
    }));
  };

  const makeChoice = (choice: Choice) => {
    setGameState(prevState => {
      // Check for conditional failure (e.g., low efficiency in famine)
      // Note: logic for "if Efficiency is -2" depends on how we model stats. 
      // Stats are 0-100. "Efficiency is -2" likely implies a low threshold or a relative change.
      // Assuming the prompt meant "If Efficiency is low (e.g. < 30)" or similar check.
      // Or if we literally track negative changes from a baseline.
      // For now, I'll implement the generic condition checker if provided in the Choice object.
      
      let finalChoice = choice;
      if (choice.condition && !choice.condition(prevState.stats, prevState.history)) {
          // Condition FAILED. Use alternate description and effects if available.
          if (choice.alternateDescription) {
              finalChoice = {
                  ...choice,
                  description: choice.alternateDescription,
                  effects: choice.alternateEffects || []
              };
          }
      } else {
          // Condition PASSED (or no condition). Use success description if available.
          if (choice.successDescription) {
              finalChoice = {
                  ...choice,
                  description: choice.successDescription,
              };
          }
      }

      // Apply stat changes
      const newStats = { ...prevState.stats };
      finalChoice.effects.forEach(effect => {
        newStats[effect.stat] = Math.max(0, Math.min(100, newStats[effect.stat] + effect.change));
      });

      // Apply philosopher alignment changes
      const newAlignment = { ...prevState.philosopherAlignment };
      Object.entries(finalChoice.philosopherTags).forEach(([philosopherId, points]) => {
        newAlignment[philosopherId] = (newAlignment[philosopherId] || 0) + points;
      });

      // Add to history
      const newHistory = [...prevState.history, finalChoice.id];

      return {
        ...prevState,
        stats: newStats,
        philosopherAlignment: newAlignment,
        history: newHistory,
        activeChoice: finalChoice, // Set active choice to show results
      };
    });
  };

  const continueGame = () => {
    setGameState(prevState => {
      if (!prevState.activeChoice?.nextScenarioId) {
        return prevState;
      }

      // Check if we should trigger interlude
      // Logic: If coming from military-reform (Act 1 end), trigger interlude
      const isEndOfAct1 = prevState.currentScenarioId === 'military-reform';
      const isEndOfAct3 = prevState.currentScenarioId === 'peoples-memory';
      const isAct2Interlude = prevState.currentScenarioId === 'corrupt-minister'; // Before border-defense
      
      // Check if we should show title card before Act 2 or Act 3
      const nextScenarioId = prevState.activeChoice.nextScenarioId;
      const isStartOfAct2 = nextScenarioId === 'inventors-proposal';
      const isStartOfAct3 = nextScenarioId === 'succession-plot';
      
      if ((isStartOfAct2 || isStartOfAct3) && !prevState.isTitleCard) {
          return {
             ...prevState,
             isTitleCard: true,
             titleCardAct: isStartOfAct2 ? 'Act II' : 'Act III'
          };
      }
      
      if ((isEndOfAct1 || isAct2Interlude) && !prevState.isInterlude) {
         return {
            ...prevState,
            isInterlude: true
            // We keep activeChoice so we remember where to go next
         };
      }
      
      // Special case for end of game
      if (isEndOfAct3 && !prevState.isInterlude) {
          return {
             ...prevState,
             isInterlude: true,
             activeChoice: {
                 ...prevState.activeChoice!,
                 nextScenarioId: 'game-end' // Override nextScenarioId to point to game end
             }
          };
      }

      return {
        ...prevState,
        currentScenarioId: prevState.activeChoice.nextScenarioId,
        activeChoice: null,
        isInterlude: false,
        isTitleCard: false,
      };
    });
  };
  
  const endInterlude = () => {
      setGameState(prevState => {
          if (!prevState.activeChoice?.nextScenarioId) return prevState;
          
          return {
            ...prevState,
            currentScenarioId: prevState.activeChoice.nextScenarioId,
            activeChoice: null,
            isInterlude: false
          };
      });
  };
  
  const endTitleCard = () => {
      setGameState(prevState => {
          if (!prevState.activeChoice?.nextScenarioId) return prevState;
          
          return {
            ...prevState,
            currentScenarioId: prevState.activeChoice.nextScenarioId,
            activeChoice: null,
            isTitleCard: false
      };
    });
  };

  const resetGame = () => {
    setGameState({
      currentScenarioId: 'appointment-of-ministers',
      stats: INITIAL_STATS,
      philosopherAlignment: INITIAL_PHILOSOPHER_ALIGNMENT,
      history: [],
      activeChoice: null,
    });
  };

  const getSchoolAlignment = (): Record<PhilosopherSchool, number> => {
    const schools: Record<PhilosopherSchool, number> = {
      confucian: 0,
      mohist: 0,
      daoist: 0,
      legalist: 0
    };
    
    Object.entries(gameState.philosopherAlignment).forEach(([id, score]) => {
      const philosopher = PHILOSOPHERS.find(p => p.id === id);
      if (philosopher && philosopher.school) {
        schools[philosopher.school] = (schools[philosopher.school] || 0) + score;
      }
    });
    return schools;
  };

  return {
    gameState,
    makeChoice,
    continueGame,
    resetGame,
    getSchoolAlignment,
    endInterlude,
    startGame, // Export new function
    endTitleCard,
  };
};
