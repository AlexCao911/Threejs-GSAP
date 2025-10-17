import { useResponsive } from '../contexts/ResponsiveContext';
import type { Breakpoint } from '../contexts/ResponsiveContext';

interface UseBreakpointReturn {
  breakpoint: Breakpoint;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isWide: boolean;
}

/**
 * Hook that returns current breakpoint and device type booleans
 * @returns Object containing breakpoint name and device type flags
 */
export const useBreakpoint = (): UseBreakpointReturn => {
  const { breakpoint, isMobile, isTablet, isDesktop, isWide } = useResponsive();

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isWide,
  };
};
