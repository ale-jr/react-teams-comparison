import { Team } from "interfaces/team";
import "jest-styled-components";
import { render } from "testUtils";
import MessageContainer from "./index";

describe("MessageContainer", () => {
  it("should match snapshot", () => {
    const errorComponent = render(
      <MessageContainer message="Oh no!" type="error" />
    );
    expect(errorComponent.asFragment()).toMatchSnapshot();

    const loadingContainer = render(
      <MessageContainer message="Fiding the best job ever!" type="loading" />
    );
    expect(loadingContainer.asFragment()).toMatchSnapshot();
  });
});
