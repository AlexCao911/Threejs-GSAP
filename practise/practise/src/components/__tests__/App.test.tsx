import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../../App';

// Mock all child components
vi.mock('../NavBar', () => ({
  default: () => <div data-testid="navbar">NavBar</div>,
}));

vi.mock('../Hero', () => ({
  default: () => <div data-testid="hero">Hero</div>,
}));

vi.mock('../ProductViewer', () => ({
  default: () => <div data-testid="product-viewer">ProductViewer</div>,
}));

vi.mock('../Showcase', () => ({
  default: () => <div data-testid="showcase">Showcase</div>,
}));

vi.mock('../Performance', () => ({
  default: () => <div data-testid="performance">Performance</div>,
}));

vi.mock('../Features', () => ({
  default: () => <div data-testid="features">Features</div>,
}));

vi.mock('../Highlights ', () => ({
  default: () => <div data-testid="highlights">Highlights</div>,
}));

vi.mock('../Footer', () => ({
  default: () => <div data-testid="footer">Footer</div>,
}));

describe('App Component', () => {
  it('should render without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should render NavBar component', () => {
    render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('should render Hero component', () => {
    render(<App />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('should render ProductViewer component', () => {
    render(<App />);
    expect(screen.getByTestId('product-viewer')).toBeInTheDocument();
  });

  it('should render Showcase component', () => {
    render(<App />);
    expect(screen.getByTestId('showcase')).toBeInTheDocument();
  });

  it('should render Performance component', () => {
    render(<App />);
    expect(screen.getByTestId('performance')).toBeInTheDocument();
  });

  it('should render Features component', () => {
    render(<App />);
    expect(screen.getByTestId('features')).toBeInTheDocument();
  });

  it('should render Highlights component', () => {
    render(<App />);
    expect(screen.getByTestId('highlights')).toBeInTheDocument();
  });

  it('should render Footer component', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render all components in correct order', () => {
    render(<App />);
    const main = screen.getByRole('main');
    const children = Array.from(main.children).map(
      (child) => child.getAttribute('data-testid')
    );
    
    expect(children).toEqual([
      'navbar',
      'hero',
      'product-viewer',
      'showcase',
      'performance',
      'features',
      'highlights',
      'footer',
    ]);
  });

  it('should use main element as container', () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
    expect(mainElement?.children.length).toBe(8);
  });

  it('should handle empty props gracefully', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should maintain component structure after multiple renders', () => {
    const { rerender } = render(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    
    rerender(<App />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});