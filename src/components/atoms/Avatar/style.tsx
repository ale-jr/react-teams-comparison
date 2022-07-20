import styled from "styled-components";
import { SizingKeys, Sizing } from 'interfaces/theme'

export interface AvatarProps {
    size: SizingKeys,
}

const avatarSizes: Sizing = {
    xs: '1em',
    sm: '2em',
    md: '3em',
    lg: '4em',
    xl: '5em'
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