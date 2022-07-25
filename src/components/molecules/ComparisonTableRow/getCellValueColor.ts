import { Theme } from "interfaces/theme";

interface GetCellValueColorAttributes {
  theme: Theme;
  value?: number;
}

const LOWEST = 2.4;
const LOW = 4.9;
const HIGH = 7.4;
const HIGHEST = 10;

export const getCellValueColor = ({
  theme,
  value,
}: GetCellValueColorAttributes): string => {
  if (!value) return theme.colors.neutral["0"] || "";
  else if (value <= LOWEST) return theme.colors.danger.default;
  else if (value <= LOW) return theme.colors.danger.light;
  else if (value <= HIGH) return theme.colors.success.light;
  else if (value <= HIGHEST) return theme.colors.success.default;
  else return theme.colors.neutral["0"] || "";
};
