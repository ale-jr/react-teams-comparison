import styled from "styled-components";
import { Link } from 'react-router-dom'

const Brand = styled(Link).attrs(() => ({
    to: '/',
    children: 'ãcme'
}))`
    //Position and Layout
    flex-grow: 1;

    //Display and visibility


    //Clipping


    //Animation
    transition: all ${({ theme }) => theme.animation.shorthand};

    //Box model (From outside in)


    //Background


    //Typography
    color: ${({ theme }) => theme.colors.primary.default};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: none;

    //Pseudo-classes and pseudo-elements
    &:hover{
        filter: brightness(0.8);
    }
`

export default Brand