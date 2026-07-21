import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PropertyGallery } from '../PropertyGallery';
import React from 'react';

// Mock the shadcn/ui carousel components
vi.mock('@/components/ui/carousel', () => ({
  Carousel: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-carousel">{children}</div>,
  CarouselContent: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-carousel-content">{children}</div>,
  CarouselItem: ({ children }: { children: React.ReactNode }) => <div data-testid="mock-carousel-item">{children}</div>,
  CarouselPrevious: () => <button data-testid="mock-carousel-prev">Prev</button>,
  CarouselNext: () => <button data-testid="mock-carousel-next">Next</button>,
}));

// Mock window.matchMedia for Embla Carousel
const mockMatchMedia = vi.fn().mockImplementation(() => ({
  matches: false,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
}));
window.matchMedia = mockMatchMedia;

// Mock IntersectionObserver as a global constructor
class MockIntersectionObserver {
  constructor(public callback: IntersectionObserverCallback) {}
  observe(target: Element) {
    // Simulate intersection immediately for testing purposes
    this.callback([{ isIntersecting: true, target: target }], this);
  }
  unobserve() {}
  disconnect() {}
}
global.IntersectionObserver = MockIntersectionObserver as any;

// Mock ResizeObserver as a global constructor
class MockResizeObserver {
  constructor(public callback: ResizeObserverCallback) {}
  observe(target: Element) {
    // Simulate a resize event immediately
    this.callback([{ contentRect: { width: 100, height: 100 }, target: target }], this);
  }
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = MockResizeObserver as any;

describe('PropertyGallery', () => {
  it('renders correctly with images and navigation elements', () => {
    const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg'];
    render(<PropertyGallery images={images} />);

    expect(screen.getByAltText(/property image 1/i)).toBeInTheDocument();
    expect(screen.getByAltText(/property image 2/i)).toBeInTheDocument();
    expect(screen.getByAltText(/property image 3/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /view all photos/i })).toBeInTheDocument();

    expect(screen.getAllByRole('button', { name: /thumbnail/i })).toHaveLength(images.length);
  });

  it('renders correctly when no images are provided', () => {
    render(<PropertyGallery images={[]} />);
    expect(screen.queryByAltText(/property image/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /previous/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /next/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /view all photos/i })).not.toBeInTheDocument();
  });
});

