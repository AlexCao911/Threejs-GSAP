# Implementation Plan

- [x] 1. Create Responsive Context System

  - Create `src/contexts/ResponsiveContext.tsx` with breakpoint configuration, viewport state management, and ResizeObserver implementation
  - Create `src/hooks/useBreakpoint.ts` hook that returns current breakpoint and device type booleans
  - Create `src/hooks/useViewportResize.ts` hook with debounced resize handling (150ms delay)
  - Update `src/constants/index.ts` to export centralized BREAKPOINTS configuration object
  - Wrap App component with ResponsiveProvider in `src/App.tsx` or `src/main.tsx`
  - _Requirements: 5.1, 5.2, 5.3, 6.5_

- [-] 2. Fix Showcase Section Responsive Layout
- [ ] 2.1 Refactor Showcase layout structure

  - Update `src/components/Showcase.tsx` to use CSS Grid with `grid-template-areas` for content positioning
  - Replace fixed padding with fluid spacing using `clamp()` functions
  - Add container queries support for self-contained responsiveness
  - Implement responsive configuration function `getShowcaseLayoutConfig()` that returns layout values based on breakpoint
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2.2 Update Showcase GSAP animations

  - Replace single `useGSAP` hook with `gsap.matchMedia()` for responsive animation handling
  - Add `invalidateOnRefresh: true` to all ScrollTrigger configurations
  - Implement conditional animation timelines for desktop, tablet, and mobile
  - Add cleanup with `revertOnUpdate: true` for dynamic dependencies
  - _Requirements: 1.4, 6.1, 6.4_

- [ ] 2.3 Update Showcase CSS styles

  - Update `#showcase` styles in `src/index.css` with improved responsive rules
  - Add min-height constraints to prevent content collapse
  - Implement fluid typography with clamp() for h2 and h3 elements
  - Fix mask positioning and scaling for intermediate viewport sizes
  - Add media queries for smooth transitions between breakpoints
  - _Requirements: 1.1, 1.5_

- [ ] 3. Fix Performance Section Responsive Layout
- [ ] 3.1 Create responsive image positioning utility

  - Create `src/utils/responsiveImagePositioning.ts` with position interpolation logic
  - Implement `interpolatePosition()` function for smooth transitions between breakpoints
  - Create `getResponsiveImageConfig()` that returns appropriate positioning based on viewport width
  - Update `performanceImgPositions` in `src/constants/index.ts` with enhanced breakpoint configurations
  - _Requirements: 2.1, 2.4_

- [ ] 3.2 Refactor Performance component layout

  - Update `src/components/Performance.tsx` to use layout modes (absolute/grid/stack) based on breakpoint
  - Implement CSS Grid stack layout for mobile devices (< 768px)
  - Add container queries to `.images-viewport` wrapper
  - Update image rendering to conditionally apply absolute positioning only on desktop
  - _Requirements: 2.2, 2.3_

- [ ] 3.3 Update Performance GSAP animations

  - Wrap image positioning timeline in `gsap.matchMedia()` for responsive behavior
  - Add viewport width checks before applying absolute positioning animations
  - Implement `invalidateOnRefresh: true` for all ScrollTrigger instances
  - Simplify or disable animations on mobile to improve performance
  - _Requirements: 2.1, 2.4, 6.1_

- [ ] 3.4 Update Performance CSS styles

  - Update `#performance` styles in `src/index.css` with improved responsive container rules
  - Add container query rules for mobile grid layout
  - Implement z-index management to prevent image overlap
  - Add responsive image sizing with max-width constraints
  - _Requirements: 2.5_

- [ ] 4. Implement Touch Gestures for Product Viewer
- [ ] 4.1 Create touch gesture handler

  - Create `src/hooks/useTouchGestures.ts` with touch event handling logic
  - Implement single-finger swipe detection for rotation
  - Implement two-finger pinch detection for zoom
  - Add momentum/inertia calculation for natural gesture feel
  - Implement selective preventDefault to avoid blocking page scroll
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ] 4.2 Update ProductViewer with touch support

  - Update `src/components/ProductViewer.tsx` to integrate useTouchGestures hook
  - Configure OrbitControls with mobile-optimized settings (enableDamping, rotateSpeed, touch mappings)
  - Add conditional OrbitControls props based on isMobile state
  - Implement visual feedback for touch interactions (optional ripple effect)
  - _Requirements: 3.5, 3.6_

- [ ] 4.3 Update Canvas configuration for mobile

  - Adjust camera settings for mobile viewports (position, fov)
  - Reduce pixelRatio on mobile devices for better performance
  - Add touch-action CSS property to canvas element
  - Test and refine touch sensitivity and zoom limits
  - _Requirements: 3.1, 3.2_

- [ ] 5. Implement Asset Optimization System
- [ ] 5.1 Create asset optimization service

  - Create `src/services/AssetOptimizationService.ts` with asset selection logic
  - Implement `getOptimizedAsset()` method that returns appropriate asset based on device and connection
  - Create asset manifest configuration with desktop/mobile variants
  - Add preload and lazy load helper methods
  - _Requirements: 4.2, 4.3, 4.4_

- [ ] 5.2 Optimize video assets

  - Update Showcase video to use optimized source based on device type
  - Add poster images for initial video load
  - Implement `preload="metadata"` attribute on mobile
  - Create or reference mobile-optimized video files (720p)
  - _Requirements: 4.3_

- [ ] 5.3 Optimize 3D model loading

  - Create `src/components/three/OptimizedModelLoader.tsx` component
  - Implement LOD (Level of Detail) model selection based on device type
  - Add Suspense boundary with loading placeholder
  - Implement progressive loading strategy
  - _Requirements: 4.2, 4.7_

- [ ] 5.4 Optimize images with responsive loading

  - Update performance images to use srcset and sizes attributes
  - Implement WebP format with JPEG fallback
  - Add blur-up placeholder technique for better perceived performance
  - Update image paths in `src/constants/index.ts` to support multiple formats
  - _Requirements: 4.4_

- [ ] 6. Implement Lazy Loading System
- [ ] 6.1 Create lazy loading hook

  - Create `src/hooks/useLazyLoad.ts` with IntersectionObserver implementation
  - Configure threshold and rootMargin for optimal loading timing
  - Add triggerOnce option to prevent re-loading
  - Return visibility state and hasLoaded flag
  - _Requirements: 4.5_

- [ ] 6.2 Apply lazy loading to Performance section

  - Wrap Performance component images with lazy loading logic
  - Load images when section is 20% visible
  - Add loading skeleton or placeholder
  - Preload next section when current is 80% scrolled
  - _Requirements: 4.5_

- [ ] 6.3 Apply lazy loading to ProductViewer

  - Wrap ProductViewer 3D model with lazy loading
  - Load model when section is 50% visible
  - Show 2D placeholder image during loading
  - Implement error boundary with fallback
  - _Requirements: 4.5_

- [ ] 6.4 Implement code splitting

  - Wrap heavy components with React.lazy()
  - Add Suspense boundaries with appropriate fallbacks
  - Conditionally load GSAP plugins only when needed
  - Split vendor bundles for better caching
  - _Requirements: 4.1_

- [ ] 7. Implement Performance Monitoring
- [ ] 7.1 Create performance monitor utility

  - Create `src/utils/PerformanceMonitor.ts` with FPS tracking
  - Implement low-end device detection based on hardware concurrency and memory
  - Add quality adaptation logic based on performance metrics
  - Create QualitySettings interface for adaptive rendering
  - _Requirements: 4.7_

- [ ] 7.2 Integrate performance monitoring in ProductViewer

  - Add FPS monitoring during initial Canvas render
  - Implement automatic quality reduction if FPS < 30
  - Adjust pixelRatio, shadows, and texture resolution based on performance
  - Add performance debug overlay (optional, dev mode only)
  - _Requirements: 4.7_

- [ ] 7.3 Optimize GSAP animations based on device capability

  - Detect low-end devices and disable complex animations
  - Simplify ScrollTrigger animations on mobile
  - Reduce animation duration on slower devices
  - Add option to disable animations entirely via user preference
  - _Requirements: 4.6_

- [ ] 8. Add Viewport Resize Handling
- [ ] 8.1 Implement global resize handler

  - Create `src/utils/resizeHandler.ts` with debounced resize logic
  - Trigger GSAP ScrollTrigger.refresh() on resize
  - Handle orientation change events
  - Prevent layout shifts during resize
  - _Requirements: 6.1, 6.2, 6.3_

- [ ] 8.2 Update components with resize listeners

  - Add resize listeners to Showcase component
  - Add resize listeners to Performance component
  - Ensure GSAP animations recalculate on resize
  - Test smooth transitions across breakpoint boundaries
  - _Requirements: 6.4, 6.5_

- [ ] 9. Update CSS with Container Queries

  - Add `@container` rules to `src/index.css` for Showcase section
  - Add `@container` rules for Performance section
  - Implement container-type on parent elements
  - Add fallback styles for browsers without container query support
  - _Requirements: 1.5, 2.4_

- [ ] 10. Cross-Browser Testing and Refinement
  - Test all components at standard breakpoints (375px, 768px, 1024px, 1440px, 1920px)
  - Test intermediate viewport sizes (900px, 1100px, 1200px)
  - Test landscape mobile orientation
  - Test touch gestures on real iOS and Android devices
  - Run Lighthouse audits and optimize based on results
  - Fix any layout shifts or overlap issues discovered during testing
  - _Requirements: All_
