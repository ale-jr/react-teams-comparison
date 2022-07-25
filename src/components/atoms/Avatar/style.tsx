import styled from "styled-components";
import { SizingKeys, Sizing } from "interfaces/theme";

export interface AvatarProps {
  size: SizingKeys;
}

const avatarSizes: Sizing = {
  xs: "1em",
  sm: "1.5em",
  md: "2em",
  lg: "3em",
  xl: "4em",
};

const Avatar = styled.img<AvatarProps>`
  width: ${({ size }) => avatarSizes[size]};
  height: ${({ size }) => avatarSizes[size]};
`;

export default Avatar;
