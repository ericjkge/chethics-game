'use client';

import { useState } from 'react';
import { GameState, GameStats, Choice } from '../types/game';
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
      return {
        ...prevState,
        currentScenarioId: prevState.activeChoice.nextScenarioId,
        activeChoice: null,
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

  return {
    gameState,
    makeChoice,
    continueGame,
    resetGame,
  };
};
