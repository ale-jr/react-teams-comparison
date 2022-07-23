import Header from 'components/molecules/Header'
import Sidebar from 'components/organisms/Sidebar'
import { User } from 'interfaces/user'
import { useLocation } from "react-router-dom"
import { Content, Main, PageWithNavigationContainer } from './styles'
import links from 'routes/sidebarLinks'
import useMenu from 'hooks/useMenu'

const dummyUser: User = {
    name: "Jonh Doe",
    picture: "https://avatars.dicebear.com/api/pixel-art-neutral/xpto.svg"
}

interface PageWithNavigationProps {
    children: JSX.Element | JSX.Element[] | string
}

const PageWithNavigation: React.FC<PageWithNavigationProps> = ({ children }) => {
    const location = useLocation()
    const { isCollapsed, closeMenu, preventAnimation, toggleMenu } = useMenu()

    return <PageWithNavigationContainer>
        <Header user={dummyUser} onToggleMenuClick={toggleMenu} />
        <Content>
            <Sidebar links={links} activeRoute={location.pathname} collapsed={isCollapsed} onClose={closeMenu} preventAnimation={preventAnimation} />
            <Main>
                {children}
            </Main>
        </Content>
    </PageWithNavigationContainer>
}

export default PageWithNavigation