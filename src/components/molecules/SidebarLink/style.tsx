import styled, { css, keyframes } from "styled-components";
import { Link as ReactRouterLink } from 'react-router-dom'
import { getLinkPadding } from './getLinkPadding'


export const LinkContainer = styled.li`
    list-style-type: none;
`

const slideIn = keyframes`
  0% {
    transform: translateX(-4px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }

 100% {
    transform: translateX(-4px);
    opacity: 0;
  }
`


interface LinkProps {
  level: number;
  $hasIcon: boolean;
  $active: boolean;
}
export const Link = styled(ReactRouterLink) <LinkProps>`
    //Position and Layout
    position: relative;

    //Display and visibility
    display: inline-flex;
    align-items: center;

    //Clipping


    //Animation
    transition: all ${({ theme }) => theme.animation.shorthand};

    //Box model (From outside in)
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
    padding-left: ${getLinkPadding};


    //Background


    //Typography
    color: ${({ $active, theme }) => $active ? theme.colors.neutral["600"] : theme.colors.neutral["500"]};
    font-weight: ${({ theme, $active }) => $active ? theme.typography.weight.bold : theme.typography.weight.regular};
    font-size: ${({ theme }) => theme.typography.size.md};
    text-decoration: none;
    white-space: nowrap;


    //Pseudo-classes and pseudo-elements
    &:hover{
        color: ${({ theme }) => theme.colors.primary.default};
    }

    span.title{
        padding-left: ${({ theme }) => theme.spacing.md};
    }

    svg.icon{
        font-size: ${({ theme }) => theme.typography.size.xl};
    }

    &::before{
            animation: ${({ $active }) => css`${$active ? slideIn : slideOut} 125ms linear both`};
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            height: 100%;
            width: 4px;
            background-color: ${({ theme }) => theme.colors.primary.default};
        }
`
