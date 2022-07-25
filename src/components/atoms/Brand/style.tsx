import styled from "styled-components";
import { Link } from 'react-router-dom'

const Brand = styled(Link).attrs(() => ({
    to: '/',
    children: 'ãcme'
}))`

    transition: all ${({ theme }) => theme.animation.shorthand};

    color: ${({ theme }) => theme.colors.primary.default};
    font-size: ${({ theme }) => theme.typography.size.lg};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    text-decoration: none;

    &:hover{
        filter: brightness(0.8);
    }
`

export default Brand