import styled from "styled-components";
import { SizingKeys, Sizing } from 'interfaces/theme'

export interface AvatarProps {
    size: SizingKeys,
}

const avatarSizes: Sizing = {
    xs: '1em',
    sm: '1.5em',
    md: '2em',
    lg: '3em',
    xl: '4em'
}



const Avatar = styled.img<AvatarProps>`
    //Position and Layout


    //Display and visibility


    //Clipping


    //Animation

    
    //Box model (From outside in)
    width: ${({ size }) => avatarSizes[size]};
    height: ${({ size }) => avatarSizes[size]};

    //Background


    //Typography


    //Pseudo-classes and pseudo-elements

`

export default Avatar