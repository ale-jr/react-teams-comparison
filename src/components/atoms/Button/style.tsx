import styled from "styled-components";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  startIcon: IconDefinition;
}
const Button = styled.button.attrs<ButtonProps>((props) => ({
  children: (
    <>
      {props.startIcon && (
        <FontAwesomeIcon icon={props.startIcon} className="start-icon" />
      )}
      {props.children}
    </>
  ),
}))<ButtonProps>`
  transition: all ${({ theme }) => theme.animation.shorthand};

  //Improvement: place border styling at the design tokens
  border: 1px solid ${({ theme }) => theme.colors.neutral["300"]};
  border-radius: 4px;

  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};

  background-color: ${({ theme }) => theme.colors.neutral["0"]};
  cursor: pointer;

  color: ${({ theme }) => theme.colors.neutral["500"]};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
  font-size: ${({ theme }) => theme.typography.size.sm};

  &:hover {
    filter: brightness(0.8);
  }

  svg.start-icon {
    padding-right: ${({ theme }) => theme.spacing.xs};
  }
`;
export default Button;
