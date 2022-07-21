import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import useMenu from "./useMenu"


describe("useMenu", () => {
    it("should start with correct state(desktop and tablet)", () => {
        const TABLET_SIZE = 768
        window.innerWidth = TABLET_SIZE;
        const { result, rerender } = renderHook(() => useMenu())
        expect(result.current.isCollapsed).toBe(false)
        expect(result.current.preventAnimation).toBe(true)

        act(() => result.current.closeMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(true)
        expect(result.current.preventAnimation).toBe(false)

        act(() => result.current.toggleMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(false)
        expect(result.current.preventAnimation).toBe(false)

        act(() => result.current.toggleMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(true)
        expect(result.current.preventAnimation).toBe(false)


    })

    it("should start with correct state(mobile)", () => {
        const MOBILE_SIZE = 425
        window.innerWidth = MOBILE_SIZE;
        const { result, rerender } = renderHook(() => useMenu())
        expect(result.current.isCollapsed).toBe(true)
        expect(result.current.preventAnimation).toBe(true)

        act(() => result.current.toggleMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(false)
        expect(result.current.preventAnimation).toBe(false)

        act(() => result.current.closeMenu())
        expect(result.current.isCollapsed).toBe(true)
        expect(result.current.preventAnimation).toBe(false)

        act(() => result.current.toggleMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(false)
        expect(result.current.preventAnimation).toBe(false)

        act(() => result.current.toggleMenu())
        rerender()
        expect(result.current.isCollapsed).toBe(true)
        expect(result.current.preventAnimation).toBe(false)


    })

})