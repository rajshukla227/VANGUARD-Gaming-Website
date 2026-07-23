import game1Img from '../assets/game1.png';
import game2Img from '../assets/game2.png';
import game3Img from '../assets/game3.png';
import char1Img from '../assets/character1.png';
import char2Img from '../assets/character2.png';
import heroImg from '../assets/hero.png';

export interface Game {
  id: string;
  title: string;
  genre: string;
  description: string;
  image: string;
  rating: number;
  platforms: ('PC' | 'Console' | 'Mobile')[];
  status: 'Available Now' | 'Coming Soon' | 'In Development' | 'Early Access' | 'Released';
  year?: number;
}

export const ALL_GAMES: Game[] = [
  {
    id: 'shadow-protocol',
    title: 'Shadow Protocol',
    genre: 'Action / Adventure',
    description: 'Infiltrate secure facilities, uncover conspiracies, and fight back against the rogue AI in this high-octane adventure.',
    image: game1Img,
    rating: 9.0,
    platforms: ['PC', 'Console'],
    status: 'Coming Soon',
    year: 2026,
  },
  {
    id: 'crimson-realm',
    title: 'Crimson Realm',
    genre: 'RPG',
    description: 'Forge your own path in a dark fantasy world filled with ancient magic, dangerous beasts, and political intrigue.',
    image: game2Img,
    rating: 9.4,
    platforms: ['PC'],
    status: 'Available Now',
    year: 2025,
  },
  {
    id: 'beyond-horizon',
    title: 'Beyond Horizon',
    genre: 'Sci-Fi',
    description: 'Explore the uncharted territories of deep space. Build colonies, discover new species, and survive the unknown.',
    image: game3Img,
    rating: 8.9,
    platforms: ['PC', 'Console'],
    status: 'In Development',
    year: 2027,
  },
  {
    id: 'neon-breach',
    title: 'Neon Breach',
    genre: 'Cyberpunk Action',
    description: 'Hack, slash, and parkour your way through a rain-soaked megacity. Augment your body, corrupt the system, rewrite your destiny.',
    image: char1Img,
    rating: 9.2,
    platforms: ['PC', 'Console'],
    status: 'Released',
    year: 2024,
  },
  {
    id: 'realms-of-kaelen',
    title: 'Realms of Kaelen',
    genre: 'Fantasy RPG',
    description: 'Explore a vast magical world of floating kingdoms, ancient dragon lords, and world-ending prophecies. Your choices shape the realm.',
    image: char2Img,
    rating: 9.5,
    platforms: ['PC', 'Console', 'Mobile'],
    status: 'Released',
    year: 2023,
  },
  {
    id: 'ashfall',
    title: 'Ashfall',
    genre: 'Survival',
    description: 'The world ended. Humanity lingers on the ash. Scavenge, build, survive — and uncover the dark truth behind the Collapse.',
    image: heroImg,
    rating: 8.8,
    platforms: ['PC', 'Console'],
    status: 'Early Access',
    year: 2025,
  },
];

export const FEATURED_GAMES = ALL_GAMES.filter(g => 
  ['shadow-protocol', 'crimson-realm', 'beyond-horizon'].includes(g.id)
);
