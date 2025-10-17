import { useEffect, useRef, useCallback } from 'react';
import { useResponsive } from '../contexts/ResponsiveContext';

interface UseViewportResizeOptions {
  onResize?: (viewport: { width: number; height: number; aspectRatio: number }) => void;
  debounceMs?: number;
}

/**
 * Hook with debounced resize handling
 * @param options Configuration options including callback and debounce delay
 * @param options.onResize Callback function to execute on resize
 * @param options.debounceMs Debounce delay in milliseconds (default: 150ms)
 */
export const useViewportResize = (options: UseViewportResizeOptions = {}) => {
  const { onResize, debounceMs = 150 } = options;
  const { viewport } = useResponsive();
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousViewportRef = useRef(viewport);

  const debouncedCallback = useCallback(() => {
    if (onResize && viewport !== previousViewportRef.current) {
      onResize(viewport);
      previousViewportRef.current = viewport;
    }
  }, [onResize, viewport]);

  useEffect(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout for debounced callback
    timeoutRef.current = setTimeout(() => {
      debouncedCallback();
    }, debounceMs);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [viewport, debounceMs, debouncedCallback]);

  return viewport;
};
