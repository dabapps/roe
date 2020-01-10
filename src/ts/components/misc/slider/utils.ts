export const getNumberOfSteps = (step: number, min: number, max: number) => {
  const totalRange = max - min;
  return Math.floor(totalRange / step) + 1;
};

export const getStepSeries = (
  step: number,
  min: number,
  max: number
): ReadonlyArray<number> => {
  const series = Array.apply(null, {
    length: getNumberOfSteps(step, min, max),
  }).map((_ITEM: number, index: number) => min + index * step);
  // NOTE: if the last value in the series is less than the max we need another step in order to be able to select it
  return series[series.length - 1] < max ? [...series, max] : series;
};

export const convertPercentageStepToStep = (
  min: number,
  max: number,
  percentageStep: number
) => {
  const totalRange = max - min;
  return min + percentageStep * totalRange;
};

export const convertStepToPercentageStep = (
  min: number,
  max: number,
  step: number
) => {
  const totalRange = max - min;
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
