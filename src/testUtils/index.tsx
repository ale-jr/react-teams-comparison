import { render, RenderOptions, RenderResult } from '@testing-library/react'
import ThemeProvider from 'providers/ThemeProvider'
import { ReactElement } from 'react'


const Providers: React.FC<{
    children: JSX.Element | JSX.Element[]
}> = ({ children }) => <ThemeProvider>{children}</ThemeProvider>


const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "queries">): RenderResult => render(ui, {
    wrapper: Providers,
    ...options
})

export * from '@testing-library/react'
export {customRender as render}