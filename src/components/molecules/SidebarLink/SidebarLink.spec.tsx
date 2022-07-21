import 'jest-styled-components'
import { render } from "testUtils"
import SidebarLink from './index'
import { getLinkPadding } from "./getLinkPadding"
import defaultTheme from 'themes/default'

import { faHome } from "@fortawesome/free-solid-svg-icons"

describe("SidebarLink", () => {

    it("Should match snapshot", () => {
        const { asFragment } = render(<SidebarLink title='Home' to='/home' icon={faHome} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it("Should match snapshot (active link)", () => {
        const { asFragment } = render(<SidebarLink title='Home' to='/home' icon={faHome} active />)
        expect(asFragment()).toMatchSnapshot()
    })

    it("Should match snapshot (sublink)", () => {
        const { asFragment } = render(<SidebarLink title='Home' to='/home' icon={faHome} active level={1} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it("Should generate padding calc correctly", () => {
        const assertions = [
            {
                level: 0,
                $hasIcon: true,
                assertion: 'calc(1em * 1)'
            },
            {
                level: 1,
                $hasIcon: true,
                assertion: 'calc(1em * 2)'
            },
            {
                level: 0,
                $hasIcon: false,
                assertion: 'calc(1.25em + calc(1em * 1))'
            },
            {
                level: 1,
                $hasIcon: false,
                assertion: 'calc(1.25em + calc(1em * 2))'
            },
        ]

        assertions.forEach(({ level, $hasIcon, assertion }) => {
            const result = getLinkPadding({ level, $hasIcon, theme: defaultTheme })
            expect(result).toBe(assertion)
        })
    })
})