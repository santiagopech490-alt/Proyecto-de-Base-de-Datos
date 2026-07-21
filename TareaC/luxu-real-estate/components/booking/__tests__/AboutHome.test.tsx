import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AboutHome } from '../AboutHome';

describe('AboutHome', () => {
  it('renders short description without Read More', () => {
    const text = 'This is a short description.';
    render(<AboutHome description={text} />);
    expect(screen.getByText(text)).toBeTruthy();
    expect(screen.queryByRole('button', { name: /Read More/i })).toBeNull();
  });

  it('renders long description with Read More toggle', () => {
    const longText = 'A'.repeat(450);
    render(<AboutHome description={longText} />);
    
    const truncatedText = longText.slice(0, 400);
    expect(screen.getByText(truncatedText)).toBeTruthy();
    
    const readMoreButton = screen.getByRole('button', { name: /Read More/i });
    expect(readMoreButton).toBeTruthy();
    
    fireEvent.click(readMoreButton);
    expect(screen.getByText(longText)).toBeTruthy();
    expect(screen.getByRole('button', { name: /Read Less/i })).toBeTruthy();
  });
});
