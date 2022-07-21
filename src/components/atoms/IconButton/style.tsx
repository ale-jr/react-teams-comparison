import styled from "styled-components";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SizingKeys, ColorKeys, ColorVariantKeys } from 'interfaces/theme'


export interface IconButtonProps {
    icon: IconDefinition
    size?: SizingKeys
    color?: ColorKeys
    colorVariant?: ColorVariantKeys
    'aria-label': string
}

const IconButton = styled.button.attrs<IconButtonProps>((props) => ({
    children: <FontAwesomeIcon icon={props.icon} />
})) <IconButtonProps>`
    //Position and Layout


    //Display and visibility


    //Clipping


    //Animation
    transition: all ${({ theme }) => theme.animation.shorthand};

    //Box model (From outside in)
    height: unset;
    border: none;
    border-radius: 50%;
    padding: 2px;

    //Background
    background: transparent;
    cursor: pointer;

    //Typography
    color: ${({ color, colorVariant = 'default', theme }) => color ? theme.colors[color][colorVariant] : 'inherit'};
    font-size: ${({ size, theme }) => size ? theme.typography.size[size] : 'inherit'};
    line-height: 0%;

    //Pseudo-classes and pseudo-elements
    &:hover{
        color: ${({ theme }) => theme.colors.primary.default};
        background: ${({ theme }) => theme.colors.neutral['100']};
    }

    &:focus{
        outline: none;
    }

    &:focus-visible{
        outline: ${({ theme }) => `2px solid ${theme.colors.primary.default}`};        
    }

`

export default IconButton