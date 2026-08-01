export interface SecretMessage {
  id: number;
  sender: string;
  preview: string;
  content: string;
  theme: string;
}

export const SECRET_MESSAGES: SecretMessage[] = [
  {
    id: 1,
    sender: "Your Person",
    preview: "A note for quiet evenings...",
    content: "Whenever life gets loud or stressful, remember that you have a safe space right here with me. You don't have to carry everything on your shoulders. I'm always by your side.",
    theme: "from-pink-500/20 to-purple-500/20"
  },
  {
    id: 2,
    sender: "Your Admirer",
    preview: "To my favorite human...",
    content: "If I could give you one gift in life, I would give you the ability to see yourself through my eyes. Only then would you realize how truly extraordinary and breathtaking you are.",
    theme: "from-rose-500/20 to-pink-500/20"
  },
  {
    id: 3,
    sender: "Soulmate",
    preview: "A promise for tomorrow...",
    content: "My favorite place in the entire world is right next to you. No matter where we go or what adventures lie ahead, as long as I have your hand in mine, I'm home.",
    theme: "from-purple-500/20 to-indigo-500/20"
  },
  {
    id: 4,
    sender: "Forever & Ever",
    preview: "On ordinary magic...",
    content: "Thank you for making even the quietest, simplest days feel like magic. With you, eating cereal at midnight or walking in the rain feels like the climax of a movie.",
    theme: "from-fuchsia-500/20 to-pink-500/20"
  },
  {
    id: 5,
    sender: "Your Love",
    preview: "A reminder of my heart...",
    content: "I fell in love with your smile, but I stayed in love with your soul. Happy Girlfriend Day, my gorgeous girl. You make my life complete in every imaginable way.",
    theme: "from-pink-400/20 to-rose-400/20"
  }
];
