import * as chromatism from 'chromatism'; //converts color to rgba

export const rgba = (color, percent) => {
  percent = percent > 1 ? percent / 100 : percent;
  const rgb = chromatism.convert(color).rgb;
  return `rgba(${rgb.r},${rgb.g},${rgb.b},${percent})`;
};