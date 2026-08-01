export interface Milestone {
  id: number;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  icon: string;
}

export interface PolaroidPhoto {
  id: number;
  title: string;
  caption: string;
  date: string;
  image: string;
  rotation: number;
}

export const MILESTONES: Milestone[] = [
  {
    id: 1,
    date: "First Encounter",
    title: "We Met",
    subtitle: "The moment the universe shifted",
    description: "It started with a simple glance that somehow caught my entire universe off guard. I didn't know it yet, but meeting you changed everything.",
    tag: "Chapter I",
    icon: "✨"
  },
  {
    id: 2,
    date: "Late Night Conversations",
    title: "We Talked",
    subtitle: "Hours turned into minutes",
    description: "From quick messages to endless late-night calls under the covers. We opened up about our dreams, our fears, and everything in between.",
    tag: "Chapter II",
    icon: "💬"
  },
  {
    id: 3,
    date: "Uncontrollable Joy",
    title: "We Laughed",
    subtitle: "Inside jokes and pure happiness",
    description: "You showed me a kind of lighthearted joy I hadn't felt in years. Laughing until our stomachs hurt over the silly things only we understand.",
    tag: "Chapter III",
    icon: "😊"
  },
  {
    id: 4,
    date: "Deepest Connection",
    title: "We Became Best Friends",
    subtitle: "My favorite person in the world",
    description: "Before anything else, you became my safe harbor. The first person I wanted to share good news with, and the only person I wanted near when things were tough.",
    tag: "Chapter IV",
    icon: "🤝"
  },
  {
    id: 5,
    date: "Forever Begins",
    title: "We Fell in Love",
    subtitle: "Two souls becoming one story",
    description: "It wasn't a sudden crash—it was like coming home after a long journey. I looked at you and realized I never want a single day without you in it.",
    tag: "Chapter V",
    icon: "💖"
  }
];

export const POLAROID_PHOTOS: PolaroidPhoto[] = [
  {
    id: 1,
    title: "Cutest Smiles",
    caption: "Your adorable bow filters & playful smiles",
    date: "May 13th",
    image: "/images/photo1.jpg",
    rotation: -4
  },
  {
    id: 2,
    title: "Red Dupatta Glow",
    caption: "You glowing under the warm golden light",
    date: "June 20th",
    image: "/images/photo2.jpg",
    rotation: 3
  },
  {
    id: 3,
    title: "Traditional Elegance",
    caption: "Stunning in your red saree by the tree",
    date: "July 15th",
    image: "/images/photo3.jpg",
    rotation: -2
  },
  {
    id: 4,
    title: "Retro Vibes",
    caption: "Cosy vintage mood & soft laughter",
    date: "August 4th",
    image: "/images/photo4.jpg",
    rotation: 5
  },
  {
    id: 5,
    title: "Starlit Night",
    caption: "Quiet night breeze & endless memories",
    date: "September 18th",
    image: "/images/photo5.jpg",
    rotation: -4
  },
  {
    id: 6,
    title: "Soft Curls & Warmth",
    caption: "The prettiest smile that brightens my day",
    date: "October 10th",
    image: "/images/photo6.jpg",
    rotation: 3
  }
];

export const START_DATE = "2026-05-13T00:00:00"; // Love counter start date
