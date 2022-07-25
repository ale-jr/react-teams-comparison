import "jest-styled-components";
import { fireEvent, render } from "testUtils";
import ComparisonTableHeader from "./index";

describe("ComparisonTableHeader", () => {
  it("Should match snapshot", () => {
    const ascendingOrder = render(
      <table>
        <thead>
          <ComparisonTableHeader sort="ascending" onSelectSort={() => {}} />
        </thead>
      </table>
    );
    expect(ascendingOrder.asFragment()).toMatchSnapshot();

    const descendingOrder = render(
      <table>
        <thead>
          <ComparisonTableHeader sort="descending" onSelectSort={() => {}} />
        </thead>
      </table>
    );
    expect(descendingOrder.asFragment()).toMatchSnapshot();
  });

  it("Should change sorting (from descending to ascending)", () => {
    const handleSelectSort = jest.fn();

    const { getByLabelText } = render(
      <table>
        <thead>
          <ComparisonTableHeader
            sort="descending"
            onSelectSort={handleSelectSort}
          />
        </thead>
      </table>
    );

    const sortButton = getByLabelText(
      "Sorting by descending teams, invert sorting order"
    );
    expect(sortButton).toBeDefined();
    fireEvent.click(sortButton);
    expect(handleSelectSort).toBeCalledTimes(1);
    expect(handleSelectSort).toBeCalledWith("ascending");
  });

  it("Should change sorting (from ascending to descending)", () => {
    const handleSelectSort = jest.fn();

    const { getByLabelText } = render(
      <table>
        <thead>
          <ComparisonTableHeader
            sort="ascending"
            onSelectSort={handleSelectSort}
          />
        </thead>
      </table>
    );

    const sortButton = getByLabelText(
      "Sorting by ascending teams, invert sorting order"
    );
    expect(sortButton).toBeDefined();
    fireEvent.click(sortButton);
    expect(handleSelectSort).toBeCalledTimes(1);
    expect(handleSelectSort).toBeCalledWith("descending");
  });
});
