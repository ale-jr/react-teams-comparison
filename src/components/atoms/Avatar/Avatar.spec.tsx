import { render } from 'testUtils'
import 'jest-styled-components'
import Avatar from './index'


describe("Avatar", () => {
    it("Should match snapshot", () => {
        const { asFragment } = render(<Avatar src="/test.png" size='md' />)
        expect(asFragment()).toMatchSnapshot()
    })
})