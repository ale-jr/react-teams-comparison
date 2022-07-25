import "jest-styled-components";
import { render } from "testUtils";
import IconButton from "./index";
import { faBug } from "@fortawesome/free-solid-svg-icons";
import themes from "themes";
describe("IconButton", () => {
  it("Should render correctly", () => {
    const ariaLabel = "report bug";
    const { getByLabelText, getByRole } = render(
      <IconButton icon={faBug} aria-label={ariaLabel} />
    );

    const iconElement = getByRole("img", { hidden: true });
    expect(iconElement).toHaveClass("fa-bug");

    const buttonElement = getByLabelText(ariaLabel);
    expect(buttonElement).toBeDefined();
    expect(buttonElement).toHaveStyleRule("color", "inherit");
    expect(buttonElement).toHaveStyleRule("font-size", "inherit");
  });

  it("Should have color and font correctly set", () => {
    const ariaLabel = "report bug";
    const { getByLabelText } = render(
      <IconButton
        icon={faBug}
        aria-label={ariaLabel}
        color="danger"
        size="md"
      />
    );

    const buttonElement = getByLabelText(ariaLabel);
    expect(buttonElement).toHaveStyleRule(
      "color",
      themes.default.colors.danger.default
    );
    expect(buttonElement).toHaveStyleRule(
      "font-size",
      themes.default.typography.size.md
    );
  });
});
