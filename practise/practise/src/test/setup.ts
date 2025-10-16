import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers);

// Cleanup after each test case
afterEach(() => {
  cleanup();
});

// Mock GSAP and ScrollTrigger
vi.mock('gsap', () => ({
  gsap: {
    timeline: vi.fn(() => ({
      to: vi.fn(),
      from: vi.fn(),
      fromTo: vi.fn(),
    })),
    to: vi.fn(),
    from: vi.fn(),
    fromTo: vi.fn(),
    registerPlugin: vi.fn(),
  },
  ScrollTrigger: {
    create: vi.fn(),
    refresh: vi.fn(),
  },
  SplitText: vi.fn(),
}));

vi.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {
    create: vi.fn(),
    refresh: vi.fn(),
  },
}));

vi.mock('gsap/all', () => ({
  ScrollTrigger: {
    create: vi.fn(),
    refresh: vi.fn(),
  },
  SplitText: vi.fn(),
}));

vi.mock('@gsap/react', () => ({
  useGSAP: vi.fn((callback) => {
    // Execute the callback immediately in tests
    callback();
  }),
}));

// Mock react-responsive
vi.mock('react-responsive', () => ({
  useMediaQuery: vi.fn(() => false),
}));

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
} as any;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});