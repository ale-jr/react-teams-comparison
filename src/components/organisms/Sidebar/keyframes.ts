import { keyframes } from 'styled-components'

export const slideIn = keyframes`
  0% {
    width: 0%;
    overflow: hidden;
  }
  100% {
    width: 224px;
  }
`
export const slideOut = keyframes`
  0% {
    width: 224px;
  }
 100% {
    width: 0;
  }
`

export const ulSlideIn = keyframes`
    0%{
        transform: translateX(-100%);
    }

    100%{
        transform: translateX(0%);
    }
`

export const ulSlideOut = keyframes`
    0%{
        transform: translateX(0%);
    }

    100%{
        transform: translateX(-100%);
    }
`

export const backdropFadeIn = keyframes`
    0%{
        opacity: 0;
    }

    99%{
        opacity: 1;
    }
`

export const backdropFadeOut = keyframes`
    0%{
        opacity: 1;
    }

    99.99%{
        width: 100vw;
        opacity: 0;
    }

    100%{
        width:0;
    }
`

