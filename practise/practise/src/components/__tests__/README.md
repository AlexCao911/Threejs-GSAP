# Component Tests

Comprehensive unit tests for all components in the application.

## Running Tests

```bash
npm test                    # Run all tests
npm test -- --watch        # Watch mode
npm run test:coverage      # With coverage
npm run test:ui            # With UI
```

## Test Files

- **App.test.tsx**: Tests the main App component integration.
- **Features.test.tsx**: Tests the structure of the Features component.
- **Footer.test.tsx**: Tests Footer component rendering.
- **Highlights.test.tsx**: Tests the Highlights component.
- **Performance.test.tsx**: Comprehensive Performance component tests

## Coverage

Tests cover:
- Component rendering
- Props handling
- Responsive behavior
- Accessibility
- Edge cases
- Integration with constants