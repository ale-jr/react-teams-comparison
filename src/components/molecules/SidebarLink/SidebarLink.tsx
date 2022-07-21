import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkContainer, Link } from './style'

interface SidebarLinkProps {
    to: string
    icon?: IconDefinition,
    title: string,
    active?: boolean,
    level?: number
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ icon, title, to, active = false, level = 0 }) => {
    return <LinkContainer>
        <Link to={to} level={level} $hasIcon={!!icon} $active={active}>
            {icon && <FontAwesomeIcon icon={icon} className="icon" fixedWidth />}
            <span className="title">{title}</span>
        </Link>
    </LinkContainer>
}


export default SidebarLink