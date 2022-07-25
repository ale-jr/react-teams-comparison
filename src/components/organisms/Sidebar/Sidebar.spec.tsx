import "jest-styled-components";
import { render } from "testUtils";

import { faHome } from "@fortawesome/free-solid-svg-icons";
import { SidebarLink } from "interfaces/sidebarLinks";
import Sidebar from "./Sidebar";

describe("Sidebar", () => {
  /*
        Big snapshot tests usually are not a great idea, but due to my available time to this test
        I prefer to create some snapshots and describe what I would do in "real life":
        * Create a provider with some routes and fire click events to the links
        to confirm that active route state is working as intended;
        * Assert links and icons by label text (ensures good acessibility 😄)
        * Create some edge cases for the sublinks recursion (empty arrays, broken links, etc)
    */

  const links: SidebarLink[] = [
    {
      icon: faHome,
      to: "/",
      title: "Home",
    },
    {
      icon: faHome,
      to: "/analysis",
      title: "Analysis",
      links: [
        {
          title: "Survey Report",
          to: "/report",
          links: [
            {
              title: "deep",
              to: "/deep",
            },
          ],
        },
        {
          title: "Comparison",
          to: "/comp",
        },
      ],
    },
    {
      to: "/whatever",
      title: "whatever",
    },
  ];

  it("Should match snapshot", () => {
    const { asFragment } = render(
      <Sidebar
        collapsed={false}
        links={links}
        activeRoute="/report"
        onClose={() => {}}
        preventAnimation={false}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
