import { range } from 'lodash';

export const constrain = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

export const getNumberOfSteps = (step: number, min: number, max: number) => {
  const totalRange = Math.abs(max - min);
  return Math.floor(totalRange / step) + 1;
};

export const getStepSeries = (
  step: number,
  min: number,
  max: number
): ReadonlyArray<number> => {
  const stepCount = getNumberOfSteps(step, min, max);
  const series = range(stepCount).map(
    (_VALUE: number, index: number) => min + index * step
  );
  // NOTE: if the last value in the series is less than the max we need another step in order to be able to select it
  return series[series.length - 1] < max ? [...series, max] : series;
};

export const convertPercentageStepToStep = (
  min: number,
  max: number,
  percentageStep: number
) => {
  const totalRange = Math.abs(max - min);
  return min + percentageStep * totalRange;
};

export const convertStepToPercentageStep = (
  min: number,
  max: number,
  step: number
) => {
  const totalRange = Math.abs(max - min);
  return (step - min) / totalRange;
};

export const getClosestValue = (
  series: ReadonlyArray<number>,
  value: number
): number => {
  const differences = series.map(step => Math.abs(step - value));
  const smallestDifference = Math.min.apply(Math, differences);
  return series[differences.indexOf(smallestDifference)];
};
