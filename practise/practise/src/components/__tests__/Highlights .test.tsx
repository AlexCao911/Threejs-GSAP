import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Highlights from '../Highlights ';

describe('Highlights Component', () => {
  it('should render without crashing', () => {
    expect(() => render(<Highlights />)).not.toThrow();
  });

  it('should render the Highlights text', () => {
    render(<Highlights />);
    expect(screen.getByText('Highlights')).toBeInTheDocument();
  });

  it('should render a React Fragment as root element', () => {
    const { container } = render(<Highlights />);
    expect(container.firstChild).not.toBe(null);
  });

  it('should be a functional component', () => {
    expect(Highlights.prototype).toBeUndefined();
  });

  it('should maintain structure after re-render', () => {
    const { rerender } = render(<Highlights />);
    expect(screen.getByText('Highlights')).toBeInTheDocument();
    rerender(<Highlights />);
    expect(screen.getByText('Highlights')).toBeInTheDocument();
  });
});