import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { BREAKPOINTS } from '../constants';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'wide';
export type Orientation = 'portrait' | 'landscape';

interface ViewportState {
  width: number;
  height: number;
  aspectRatio: number;
}

interface ResponsiveContextValue {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
  viewport: ViewportState;
  orientation: Orientation;
}

const ResponsiveContext = createContext<ResponsiveContextValue | undefined>(undefined);

const getBreakpoint = (width: number): Breakpoint => {
  if (width <= BREAKPOINTS.mobile) return 'mobile';
  if (width <= BREAKPOINTS.tablet) return 'tablet';
  if (width <= BREAKPOINTS.desktop) return 'desktop';
  return 'wide';
};

const getOrientation = (width: number, height: number): Orientation => {
  return width > height ? 'landscape' : 'portrait';
};

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider: React.FC<ResponsiveProviderProps> = ({ children }) => {
  const [viewport, setViewport] = useState<ViewportState>(() => ({
    width: window.innerWidth,
    height: window.innerHeight,
    aspectRatio: window.innerWidth / window.innerHeight,
  }));

  const updateViewport = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setViewport({
      width,
      height,
      aspectRatio: width / height,
    });
  }, []);

  useEffect(() => {
    // Use ResizeObserver for efficient viewport tracking
    const resizeObserver = new ResizeObserver(() => {
      updateViewport();
    });

    resizeObserver.observe(document.documentElement);

    // Fallback for orientation change
    const handleOrientationChange = () => {
      updateViewport();
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [updateViewport]);

  const breakpoint = getBreakpoint(viewport.width);
  const orientation = getOrientation(viewport.width, viewport.height);

  const value: ResponsiveContextValue = {
    breakpoint,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isWide: breakpoint === 'wide',
    viewport,
    orientation,
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsive = (): ResponsiveContextValue => {
  const context = useContext(ResponsiveContext);
  if (context === undefined) {
    throw new Error('useResponsive must be used within a ResponsiveProvider');
  }
  return context;
};
