import { SidebarLink as SidebarLinkType } from "interfaces/sidebarLinks";
import { Fragment } from "react";
import { SidebarContainer, Backdrop } from "./style";
import SidebarLink from "components/molecules/SidebarLink";

interface SidebarProps {
  activeRoute: string;
  collapsed: boolean;
  preventAnimation: boolean;
  links: SidebarLinkType[];
  onClose: () => void;
}

const renderLinks = (
  links: SidebarLinkType[],
  activeRoute: string,
  level: number = 0
): JSX.Element | JSX.Element[] => {
  return links.map(({ links: subLinks, title, to, icon }) => (
    <Fragment key={to}>
      <SidebarLink
        title={title}
        to={to}
        active={to === activeRoute}
        icon={icon}
        level={level}
      />
      {subLinks && <ul>{renderLinks(subLinks, activeRoute, level + 1)}</ul>}
    </Fragment>
  ));
};

const Sidebar: React.FC<SidebarProps> = ({
  activeRoute,
  links,
  collapsed,
  preventAnimation,
  onClose,
}) => {
  return (
    <>
      <SidebarContainer
        $collapsed={collapsed}
        $preventAnimation={preventAnimation}
      >
        <ul>{renderLinks(links, activeRoute)}</ul>
      </SidebarContainer>
      <Backdrop
        onClick={onClose}
        $collapsed={collapsed}
        $preventAnimation={preventAnimation}
      />
    </>
  );
};

export default Sidebar;
