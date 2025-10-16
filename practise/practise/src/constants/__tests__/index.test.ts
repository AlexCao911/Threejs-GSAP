import { describe, it, expect } from 'vitest';
import {
  performanceImages,
  performanceImgPositions,
  shouldChangePartColor,
  noChangeParts,
} from '../index';

describe('Constants Module', () => {
  describe('performanceImages', () => {
    it('should be defined and be an array', () => {
      expect(performanceImages).toBeDefined();
      expect(Array.isArray(performanceImages)).toBe(true);
    });

    it('should contain exactly 7 images', () => {
      expect(performanceImages).toHaveLength(7);
    });

    it('should have all required properties for each image', () => {
      performanceImages.forEach((image) => {
        expect(image).toHaveProperty('id');
        expect(image).toHaveProperty('src');
        expect(typeof image.id).toBe('string');
        expect(typeof image.src).toBe('string');
      });
    });

    it('should have unique ids for each image', () => {
      const ids = performanceImages.map((img) => img.id);
      const uniqueIds = new Set(ids);
      expect(uniqueIds.size).toBe(ids.length);
    });

    it('should have ids from p1 to p7', () => {
      const expectedIds = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
      const actualIds = performanceImages.map((img) => img.id);
      expect(actualIds).toEqual(expectedIds);
    });
  });

  describe('performanceImgPositions', () => {
    it('should be defined and be an array', () => {
      expect(performanceImgPositions).toBeDefined();
      expect(Array.isArray(performanceImgPositions)).toBe(true);
    });

    it('should contain exactly 7 position configurations', () => {
      expect(performanceImgPositions).toHaveLength(7);
    });

    it('should have id property for each position', () => {
      performanceImgPositions.forEach((position) => {
        expect(position).toHaveProperty('id');
        expect(typeof position.id).toBe('string');
      });
    });

    it('should have matching ids with performanceImages', () => {
      const imageIds = performanceImages.map((img) => img.id);
      const positionIds = performanceImgPositions.map((pos) => pos.id);
      expect(positionIds).toEqual(imageIds);
    });

    it('should have at least one positioning property', () => {
      performanceImgPositions.forEach((position) => {
        const hasPositioning =
          'left' in position ||
          'right' in position ||
          'top' in position ||
          'bottom' in position;
        expect(hasPositioning).toBe(true);
      });
    });

    it('should have numeric values for positioning properties', () => {
      performanceImgPositions.forEach((position) => {
        if ('left' in position) expect(typeof position.left).toBe('number');
        if ('right' in position) expect(typeof position.right).toBe('number');
        if ('top' in position) expect(typeof position.top).toBe('number');
        if ('bottom' in position) expect(typeof position.bottom).toBe('number');
      });
    });

    it('should have transform property for some positions', () => {
      const withTransform = performanceImgPositions.filter((pos) => pos.transform);
      expect(withTransform.length).toBeGreaterThan(0);
    });

    it('should have desktop configurations for some positions', () => {
      const withDesktop = performanceImgPositions.filter((pos) => pos.desktop);
      expect(withDesktop.length).toBeGreaterThan(0);
    });

    it('should have tablet configurations for some positions', () => {
      const withTablet = performanceImgPositions.filter((pos) => pos.tablet);
      expect(withTablet.length).toBeGreaterThan(0);
    });

    it('should have mobile configurations for some positions', () => {
      const withMobile = performanceImgPositions.filter((pos) => pos.mobile);
      expect(withMobile.length).toBeGreaterThan(0);
    });
  });

  describe('shouldChangePartColor function', () => {
    it('should be defined and be a function', () => {
      expect(shouldChangePartColor).toBeDefined();
      expect(typeof shouldChangePartColor).toBe('function');
    });

    it('should return boolean', () => {
      const result = shouldChangePartColor('testPart');
      expect(typeof result).toBe('boolean');
    });

    it('should return false for parts in noChangeParts array', () => {
      noChangeParts.forEach((part) => {
        expect(shouldChangePartColor(part)).toBe(false);
      });
    });

    it('should return true for parts not in noChangeParts array', () => {
      const customPart = 'CustomPartNotInList';
      expect(shouldChangePartColor(customPart)).toBe(true);
    });

    it('should handle materialName parameter', () => {
      const result = shouldChangePartColor('testPart', 'testMaterial');
      expect(typeof result).toBe('boolean');
    });

    it('should return false for materials with fixed keywords', () => {
      expect(shouldChangePartColor('testPart', 'screen_material')).toBe(false);
      expect(shouldChangePartColor('testPart', 'glass_material')).toBe(false);
      expect(shouldChangePartColor('testPart', 'keyboard_material')).toBe(false);
    });
  });

  describe('noChangeParts', () => {
    it('should be defined and be an array', () => {
      expect(noChangeParts).toBeDefined();
      expect(Array.isArray(noChangeParts)).toBe(true);
    });

    it('should contain string values', () => {
      noChangeParts.forEach((part) => {
        expect(typeof part).toBe('string');
      });
    });

    it('should not be empty', () => {
      expect(noChangeParts.length).toBeGreaterThan(0);
    });

    it('should have unique values', () => {
      const uniqueParts = new Set(noChangeParts);
      expect(uniqueParts.size).toBe(noChangeParts.length);
    });
  });

  describe('Module Exports', () => {
    it('should export all required constants', () => {
      expect(performanceImages).toBeDefined();
      expect(performanceImgPositions).toBeDefined();
      expect(shouldChangePartColor).toBeDefined();
      expect(noChangeParts).toBeDefined();
    });

    it('should have consistent data structures', () => {
      expect(performanceImages.length).toBe(performanceImgPositions.length);
    });
  });
});