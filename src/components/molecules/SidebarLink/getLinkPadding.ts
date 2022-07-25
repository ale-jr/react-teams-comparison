import { Theme } from "interfaces/theme";

interface GetLinkPaddingAtributes {
  theme: Theme;
  level: number;
  $hasIcon: boolean;
}
export const getLinkPadding = ({
  theme,
  level,
  $hasIcon,
}: GetLinkPaddingAtributes): string => {
  const calcWithIcon = `calc(${theme.spacing.md} * ${level + 1})`;
  const calcWithoutIcon = `calc(1.25em + ${calcWithIcon})`;
  return $hasIcon ? calcWithIcon : calcWithoutIcon;
};
