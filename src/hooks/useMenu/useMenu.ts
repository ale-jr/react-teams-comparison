import { useState } from "react";


const MOBILE_BREAKPOINT = 425


const useMenu = () => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
    const initialCollapseState = isMobile ? true : false
    
    const [isCollapsed, setIsCollapsed] = useState(initialCollapseState)
    const [preventAnimation, setPreventAnimation] = useState(true)


    const toggleMenu = () => {
        if (preventAnimation) setPreventAnimation(false)
        setIsCollapsed((isCollapsed) => !isCollapsed)
    }

    const closeMenu = () => {
        if (preventAnimation) setPreventAnimation(false)
        setIsCollapsed(true)
    }

    return {
        isCollapsed,
        preventAnimation,
        toggleMenu,
        closeMenu
    }

}

export default useMenu