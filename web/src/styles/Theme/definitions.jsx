const baseColors = {
  black: "#000000",
  red: "#ff647c",
  green: "#0bd9b3",
  blue: "#487fd9",
  yellow: "#ebc455",
};

const brandColors = {
  raisinBlack: "#16171c",
  caribbeanGreen: baseColors.green,
};

const colors = {
  ...baseColors,
  ...brandColors,
};

export const definitions = {
  colors,
};
