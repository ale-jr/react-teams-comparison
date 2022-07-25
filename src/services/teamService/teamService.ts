import { Team, TeamValues } from "interfaces/team";
import { Sort } from "interfaces/sort";

interface FetchTeamsResponse {
  benchmark: TeamValues;
  average: TeamValues;
  teams: Team[];
}

export const fetchTeams = (
  abortController?: AbortController
): Promise<FetchTeamsResponse> =>
  fetch("/teams.json", {
    signal: abortController?.signal,
  })
    .then((response) => {
      if (!response.ok) {
        //TODO: Improve error handling
        throw new Error("Could not fetch teams");
      }
      return response.json();
    })
    .then((data) => ({
      average: getTeamsAverage(data.teams),
      benchmark: data.benchmark,
      teams: data.teams,
    }));

const EMPTY_TEAMS_VALUES = {
  participation: 0,
  eNPS: 0,
  overallEngagement: 0,
  recognition: 0,
  feedback: 0,
  relationshipWithPeers: 0,
  relationshipWithManager: 0,
  satisfaction: 0,
  alignment: 0,
  happiness: 0,
  wellness: 0,
  personalGrowth: 0,
  ambassadorship: 0,
};
export const getTeamsAverage = (teams: Team[]): TeamValues => {
  const teamValuesSum = teams.reduce<TeamValues>(
    (values, { name, ...currentTeamValues }) => {
      const sum = { ...values };

      Object.keys(currentTeamValues).forEach((key) => {
        const teamValuesKeys = key as keyof TeamValues;
        sum[teamValuesKeys] =
          sum[teamValuesKeys] + currentTeamValues[teamValuesKeys];
      });

      return sum;
    },
    EMPTY_TEAMS_VALUES
  );

  const teamValuesAverage = EMPTY_TEAMS_VALUES;
  Object.keys(teamValuesSum).forEach((key) => {
    const teamValuesKeys = key as keyof TeamValues;
    teamValuesAverage[teamValuesKeys] =
      teamValuesSum[teamValuesKeys] / teams.length;
  });

  return teamValuesAverage;
};

export const sortTeams = (teams: Team[], order: Sort): Team[] => {
  const teamsCopy = [...teams];
  teamsCopy.sort((a, b) => {
    const comparison = a.name.localeCompare(b.name, undefined, {
      ignorePunctuation: true,
    });
    return order === "ascending" ? comparison : comparison * -1;
  });
  return teamsCopy;
};
