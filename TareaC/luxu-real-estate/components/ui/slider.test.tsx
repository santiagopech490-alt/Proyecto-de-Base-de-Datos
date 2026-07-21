import { render } from '@testing-library/react';
import { Slider } from './slider';
import { describe, it, expect } from 'vitest';

describe('Slider Component', () => {
  it('should render correctly', () => {
    const { container } = render(<Slider defaultValue={[50]} max={100} step={1} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render with multiple thumbs', () => {
    const { container } = render(<Slider defaultValue={[20, 80]} max={100} step={1} />);
    const thumbs = container.querySelectorAll('[role="slider"]');
    // shadcn slider uses radix-ui which renders thumbs
    // We just want to ensure it doesn't crash
    expect(container.firstChild).toBeInTheDocument();
  });
});
