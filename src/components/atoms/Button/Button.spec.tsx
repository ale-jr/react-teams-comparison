import "jest-styled-components";
import Button from "./index";
import { render } from "testUtils";
import { faBug } from "@fortawesome/free-solid-svg-icons";

describe("Button", () => {
  it("should render icon", () => {
    const { getByRole } = render(<Button startIcon={faBug}>Click Me!</Button>);
    expect(
      getByRole("img", {
        hidden: true,
      })
    ).toBeDefined();
  });
});
