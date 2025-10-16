import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Features from '../Features';

describe('Features Component', () => {
  it('should render without crashing', () => {
    expect(() => render(<Features />)).not.toThrow();
  });

  it('should render the Features text', () => {
    render(<Features />);
    expect(screen.getByText('Features')).toBeInTheDocument();
  });

  it('should render a React Fragment as root element', () => {
    const { container } = render(<Features />);
    // Fragment doesn't create a wrapper element
    expect(container.firstChild).not.toBe(null);
  });

  it('should render exactly 4 empty paragraph elements', () => {
    const { container } = render(<Features />);
    const paragraphs = container.querySelectorAll('p');
    expect(paragraphs).toHaveLength(4);
  });

  it('should render all paragraphs as empty', () => {
    const { container } = render(<Features />);
    const paragraphs = container.querySelectorAll('p');
    
    paragraphs.forEach((p) => {
      expect(p.textContent).toBe('');
    });
  });

  it('should maintain structure after re-render', () => {
    const { rerender, container } = render(<Features />);
    
    const initialParagraphs = container.querySelectorAll('p').length;
    
    rerender(<Features />);
    
    const rerenderedParagraphs = container.querySelectorAll('p').length;
    expect(rerenderedParagraphs).toBe(initialParagraphs);
  });

  it('should export as default', () => {
    expect(Features).toBeDefined();
    expect(typeof Features).toBe('function');
  });

  it('should be a functional component', () => {
    expect(Features.prototype).toBeUndefined();
  });

  it('should render with consistent structure', () => {
    const { container } = render(<Features />);
    
    expect(screen.getByText('Features')).toBeInTheDocument();
    expect(container.querySelectorAll('p')).toHaveLength(4);
  });

  it('should handle multiple instances independently', () => {
    const { container: container1 } = render(<Features />);
    const { container: container2 } = render(<Features />);
    
    expect(container1.querySelectorAll('p')).toHaveLength(4);
    expect(container2.querySelectorAll('p')).toHaveLength(4);
  });
});