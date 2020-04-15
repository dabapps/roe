import {
  convertPercentageStepToStep,
  convertStepToPercentageStep,
  getClosestValue,
  getNumberOfSteps,
  getStepSeries,
} from '../../src/ts/utils/slider';

describe('slider utils', () => {
  describe('getStepSeries', () => {
    it('should return steps as a series between 0 and 100', () => {
      expect(getStepSeries(10, 0, 100)).toEqual([
        0,
        10,
        20,
        30,
        40,
        50,
        60,
        70,
        80,
        90,
        100,
      ]);
    });

    it('should return steps as a series even when the steps dont fit the range exactly', () => {
      expect(getStepSeries(15, 0, 125)).toEqual([
        0,
        15,
        30,
        45,
        60,
        75,
        90,
        105,
        120,
        125,
      ]);
    });
  });

  describe('getNumberOfSteps', () => {
    it('should give back the number of steps', () => {
      expect(getNumberOfSteps(1, 0, 50)).toBe(51);
    });
  });

  describe('getClosestValue', () => {
    it('should find the closest value in the series', () => {
      expect(getClosestValue([45, 67, 86, 90, 100], 83)).toBe(86);
      expect(getClosestValue([0.45, 0.67, 0.86, 0.9, 0.1], 0.83)).toBe(0.86);
    });
  });

  describe('convertPercentageStepToStep', () => {
    it('converts a percentage step to a value step', () => {
      expect(convertPercentageStepToStep(0, 10, 0.1)).toBe(1);
    });
  });

  describe('convertStepToPercentageStep', () => {
    it('converts a value step to a percentage step', () => {
      expect(convertStepToPercentageStep(0, 10, 1)).toBe(0.1);
    });
  });
});
