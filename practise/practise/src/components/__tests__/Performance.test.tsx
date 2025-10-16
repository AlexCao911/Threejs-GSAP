import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Performance from '../Performance';
import { performanceImages, performanceImgPositions } from '../../constants';
import * as reactResponsive from 'react-responsive';

vi.mock('react-responsive');
vi.mock('@gsap/react');
vi.mock('gsap');
vi.mock('gsap/ScrollTrigger');

describe('Performance Component', () => {
  const mockUseMediaQuery = vi.mocked(reactResponsive.useMediaQuery);

  beforeEach(() => {
    mockUseMediaQuery.mockReturnValue(false);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  describe('Basic Rendering', () => {
    it('should render without crashing', () => {
      expect(() => render(<Performance />)).not.toThrow();
    });

    it('should render the section element with correct id', () => {
      const { container } = render(<Performance />);
      const section = container.querySelector('#performance');
      expect(section).toBeInTheDocument();
      expect(section?.tagName).toBe('SECTION');
    });

    it('should render the main heading', () => {
      render(<Performance />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Next-level graphics performance');
    });

    it('should render the descriptive paragraph', () => {
      render(<Performance />);
      const paragraph = screen.getByText(/Run graphics-intensive workflows/i);
      expect(paragraph).toBeInTheDocument();
    });
  });

  describe('Image Rendering', () => {
    it('should render all performance images', () => {
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      expect(images).toHaveLength(performanceImages.length);
    });

    it('should render images with correct src attributes', () => {
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      
      images.forEach((img, index) => {
        expect(img.getAttribute('src')).toBe(performanceImages[index].src);
      });
    });

    it('should render images with correct class names', () => {
      const { container } = render(<Performance />);
      
      performanceImages.forEach((image) => {
        const img = container.querySelector(`.${image.id}`);
        expect(img).toBeInTheDocument();
      });
    });

    it('should render images with alt text', () => {
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      
      images.forEach((img) => {
        expect(img.getAttribute('alt')).toBeTruthy();
      });
    });
  });

  describe('Responsive Behavior', () => {
    it('should detect mobile view', () => {
      mockUseMediaQuery.mockImplementation((query) => {
        if (query.query === '(max-width: 768px)') return true;
        return false;
      });
      
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      
      images.forEach((img) => {
        expect(img.className).toMatch(/relative|block/);
      });
    });

    it('should handle re-renders without errors', () => {
      const { rerender } = render(<Performance />);
      expect(() => rerender(<Performance />)).not.toThrow();
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<Performance />);
      const heading = screen.getByRole('heading', { level: 2 });
      expect(heading).toBeInTheDocument();
    });

    it('should provide alt text for all images', () => {
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      
      images.forEach((img) => {
        expect(img.getAttribute('alt')).toBeTruthy();
      });
    });

    it('should have semantic section element', () => {
      const { container } = render(<Performance />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });
  });

  describe('Integration with Constants', () => {
    it('should use performanceImages from constants', () => {
      const { container } = render(<Performance />);
      const images = container.querySelectorAll('img');
      expect(images.length).toBe(performanceImages.length);
    });

    it('should apply correct image ids from constants', () => {
      const { container } = render(<Performance />);
      
      performanceImages.forEach((image) => {
        const img = container.querySelector(`.${image.id}`);
        expect(img).toBeInTheDocument();
      });
    });
  });
});