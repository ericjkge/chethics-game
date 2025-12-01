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
  });

  const makeChoice = (choice: Choice) => {
    setGameState(prevState => {
      // Apply stat changes
      const newStats = { ...prevState.stats };
      choice.effects.forEach(effect => {
        newStats[effect.stat] = Math.max(0, Math.min(100, newStats[effect.stat] + effect.change));
      });

      // Apply philosopher alignment changes
      const newAlignment = { ...prevState.philosopherAlignment };
      Object.entries(choice.philosopherTags).forEach(([philosopherId, points]) => {
        newAlignment[philosopherId] = (newAlignment[philosopherId] || 0) + points;
      });

      // Add to history
      const newHistory = [...prevState.history, choice.id];

      return {
        ...prevState,
        stats: newStats,
        philosopherAlignment: newAlignment,
        history: newHistory,
        activeChoice: choice, // Set active choice to show results
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
      
      if (isEndOfAct1 && !prevState.isInterlude) {
         return {
            ...prevState,
            isInterlude: true
            // We keep activeChoice so we remember where to go next
         };
      }

      return {
        ...prevState,
        currentScenarioId: prevState.activeChoice.nextScenarioId,
        activeChoice: null,
        isInterlude: false,
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
  };
};
