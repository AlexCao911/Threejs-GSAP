import { create } from "zustand";
import feature1Video from "/videos/feature-1.mp4";

// 1. Create interface -> store
interface MacbookState {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  texture: string;
  setTexture: (texture: string) => void;
  reset: () => void;
}

// 2. Apply the types in create function
const useMacbookStore = create<MacbookState>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  texture: feature1Video,
  setTexture: (texture: string) => set({ texture }),

  reset: () => set({ color: "#2e2c2e", scale: 0.08, texture: feature1Video }),
}));

export default useMacbookStore;
