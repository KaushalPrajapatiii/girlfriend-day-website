export interface VideoHighlight {
  id: number;
  title: string;
  caption: string;
  date: string;
  videoUrl: string;
  posterUrl?: string;
  tag: string;
}

export const VIDEO_HIGHLIGHTS: VideoHighlight[] = [
  {
    id: 1,
    title: "Cutest Smiles in Motion",
    caption: "The way you smile whenever you see me",
    date: "July 5th",
    videoUrl: "/videos/video1.mp4",
    tag: "Reel #1"
  },
  {
    id: 2,
    title: "Playful Heartbeats",
    caption: "Pure joy and uncontrollable giggles",
    date: "July 22nd",
    videoUrl: "/videos/video2.mp4",
    tag: "Reel #2"
  },
  {
    id: 3,
    title: "Golden Hour Glow",
    caption: "Shining brighter than any sunset",
    date: "July 25th",
    videoUrl: "/videos/video3.mp4",
    tag: "Reel #3"
  }
];
