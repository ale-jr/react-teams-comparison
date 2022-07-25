import { render } from "testUtils";
import "jest-styled-components";
import Brand from "./index";

describe("Brand", () => {
  it("Should match snapshot", () => {
    const { asFragment } = render(<Brand />);
    expect(asFragment()).toMatchSnapshot();
  });
});
