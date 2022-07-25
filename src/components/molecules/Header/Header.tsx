import { User } from "interfaces/user";
import { HeaderContainer } from "./style";
import IconButton from "components/atoms/IconButton";
import Brand from "components/atoms/Brand";
import Avatar from "components/atoms/Avatar";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
interface HeaderProps {
  user: User;
  onToggleMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onToggleMenuClick }) => {
  return (
    <HeaderContainer>
      <IconButton
        icon={faBars}
        aria-label="Toggle menu"
        onClick={onToggleMenuClick}
        color="neutral"
        colorVariant="400"
        size="xl"
      />
      <span className="grow">
        <Brand />
      </span>
      <IconButton
        icon={faCircleQuestion}
        aria-label="Help"
        color="neutral"
        colorVariant="400"
        size="xl"
      />
      <Avatar src={user.picture} alt="Go to your profile" size="sm" />
    </HeaderContainer>
  );
};

export default Header;
