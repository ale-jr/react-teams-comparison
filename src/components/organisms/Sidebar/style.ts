import styled from 'styled-components'
import { backdropFadeIn, backdropFadeOut, slideIn, slideOut, ulSlideIn, ulSlideOut, } from './keyframes'

interface SidebarContainerProps {
    $collapsed: boolean
    $preventAnimation: boolean
}

export const SidebarContainer = styled.nav<SidebarContainerProps>`
    flex-shrink: 0;

    animation: ${({ $collapsed }) => $collapsed ? slideOut : slideIn} ${({ $preventAnimation }) => $preventAnimation ? '0ms' : '200ms'} linear both;
    
    height: 100%;
    border-right: 1px solid ${({ theme }) => theme.colors.neutral["200"]};
    padding-top: ${({ theme }) => theme.spacing.sm};

    background-color: ${({ theme }) => theme.colors.neutral['0']};

    ul{
        padding: 0;
    }

    ul:first-child{
        animation: ${({ $collapsed }) => $collapsed ? ulSlideOut : ulSlideIn} ${({ $preventAnimation }) => $preventAnimation ? '0ms' : '200ms'} linear both;

        position: absolute;
    }

    @media only screen and (max-width: 425px) {
        position: absolute;
        z-index: 98;

        height: calc(100% - 4.875rem);

    }
`

interface BackdropProps {
    $collapsed: boolean
    $preventAnimation: boolean
}

export const Backdrop = styled.div<BackdropProps>`
    display: block;
    position: fixed;
    z-index:97;

    animation: ${({ $collapsed }) => $collapsed ? backdropFadeOut : backdropFadeIn} ${({ $preventAnimation }) => $preventAnimation ? '0ms' : '200ms'} linear both;

    background-color: rgba(0, 0, 0, 0.5);

    top: 0;
    left: 0;
    width: 100vw;
    height: 0;


    @media only screen and (max-width: 425px) {
        height: 100vh;
    }
`