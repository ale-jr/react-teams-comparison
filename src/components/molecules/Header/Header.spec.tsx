import { User } from 'interfaces/user'
import 'jest-styled-components'
import { fireEvent, render } from "testUtils"
import Header from './index'

describe("Header", () => {
    it("should render correctly", () => {
        const user: User = {
            name: "John Doe",
            picture: 'https://avatars.dicebear.com/api/pixel-art-neutral/xpto.svg'
        }

        const { getByLabelText, getByAltText } = render(<Header user={user} onToggleMenuClick={() => { }} />)

        expect(getByLabelText("Help", {
            exact: false
        })).toBeDefined()

        expect(getByAltText("profile", {
            exact: false
        })).toHaveAttribute('src', user.picture)

    })


    it("should trigger callback when toggle menu is clicked", () => {
        const user: User = {
            name: "John Doe",
            picture: 'https://avatars.dicebear.com/api/pixel-art-neutral/xpto.svg'
        }

        const handleToggleMenu = jest.fn()

        const { getByLabelText } = render(<Header user={user} onToggleMenuClick={handleToggleMenu} />)

        fireEvent.click(getByLabelText('Toggle menu'))

        expect(handleToggleMenu).toBeCalledTimes(1)
    })
})