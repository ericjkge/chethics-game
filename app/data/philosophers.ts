import { Philosopher } from '../types/game';

/**
 * Configurable list of philosophers tracked in the game.
 * Add or modify philosophers here to expand the game's philosophical scope.
 */
export const PHILOSOPHERS: Philosopher[] = [
  {
    id: 'confucius',
    name: 'Confucius',
    school: 'confucian',
    description: 'Emphasizes moral virtue, ritual propriety, and ethical governance through personal example.',
  },
  {
    id: 'hanfeizi',
    name: 'Han Feizi',
    school: 'legalist',
    description: 'Advocates for strict laws, centralized power, and pragmatic governance through institutional control.',
  },
  {
    id: 'mozi',
    name: 'Mozi',
    school: 'mohist',
    description: 'Champions universal love, meritocracy, and practical welfare for all people regardless of status.',
  },
  {
    id: 'xunzi',
    name: 'Xunzi',
    school: 'confucian',
    description: 'Believes human nature is wayward and requires strict rituals and education to become virtuous.',
  },
  {
    id: 'mengzi',
    name: 'Mengzi',
    school: 'confucian',
    description: 'Believes human nature is inherently good and education should cultivate innate virtues.',
  },
  {
    id: 'zhuangzi',
    name: 'Zhuangzi',
    school: 'daoist',
    description: 'Advocates for following nature (Dao), spontaneity, and freedom from social constraints.',
  },
  {
    id: 'lordshang',
    name: 'Lord Shang',
    school: 'legalist',
    description: 'A legalist reformer who emphasizes agriculture, war, and strict laws to strengthen the state.',
  },
  {
    id: 'laozi',
    name: 'Laozi',
    school: 'daoist',
    description: 'Founder of Daoism, advocating for non-action (Wu Wei), simplicity, and harmony with nature.',
  },
];

export const getPhilosopherById = (id: string): Philosopher | undefined => {
  return PHILOSOPHERS.find(p => p.id === id);
};
