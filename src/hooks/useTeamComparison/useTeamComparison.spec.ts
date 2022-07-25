import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import mockData from "./mockTeams.json";

import useTeamComparison from "./index";

const server = setupServer(
  rest.get("/teams.json", (_req, res, ctx) => {
    return res(ctx.json(mockData));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useTeamsComparison", () => {
  it("should fetch teams correctly", async () => {
    const { result, rerender } = renderHook(() => useTeamComparison());
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.average).toEqual({
      alignment: 4.6,
      ambassadorship: 6.15,
      eNPS: 97,
      feedback: 6.15,
      happiness: 6.15,
      overallEngagement: 6.15,
      participation: 97,
      personalGrowth: 6.15,
      recognition: 4.6,
      relationshipWithManager: 7.25,
      relationshipWithPeers: 5.3,
      satisfaction: 6.15,
      wellness: 6.15,
    });

    expect(result.current.error).toBe("");
    expect(result.current.benchmark).toEqual(mockData.benchmark);
    expect(result.current.teams).toEqual(mockData.teams);

    expect(result.current.sortOrder).toBe("ascending");
    act(() => result.current.sortTeams("descending"));
    rerender();
    expect(result.current.teams[0].name).toBe("Team US");
    expect(result.current.teams[1].name).toBe("Team Brazil");
  });

  it("should handle error correctly", async () => {
    server.use(
      rest.get("/teams.json", (_req, res) => {
        return res.networkError("Failed to connect");
      })
    );
    const { result, rerender } = renderHook(() => useTeamComparison());
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
    });

    expect(result.current.error).toBe("An error ocurred while getting teams");
  });
});
