import { Sort } from "interfaces/sort";
import { Team, TeamValues } from "interfaces/team";
import { useState, useEffect } from "react";
import * as teamService from "services/teamService";

interface useTeamComparisonHook {
  benchmark?: TeamValues;
  average?: TeamValues;
  teams: Team[];
  loading: boolean;
  error?: string;
  sortOrder: Sort;
  sortTeams: (sort: Sort) => void;
}

//A hook should have just one responsability, and clearly this does a lot more than one thing,
// in a production environment I'd do at least two hooks:
// * One for calling the service, with abort control, loading and error handling.
// * This hook, that will just pass the response from the "useRequest" hook and deal with sorting state (maybe I'd break that too 😅?)
const useTeamComparison = (): useTeamComparisonHook => {
  //Maybe use useReducer instead?
  const [teams, setTeams] = useState<useTeamComparisonHook["teams"]>([]);
  const [average, setAverage] = useState<useTeamComparisonHook["average"]>();
  const [benchmark, setBenchmark] =
    useState<useTeamComparisonHook["benchmark"]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sortOrder, setSortOrder] = useState<Sort>("ascending");

  const fetchTeams = () => {
    const abortController = new AbortController();

    setLoading(true);
    teamService
      .fetchTeams(abortController)
      .then(({ average, benchmark, teams }) => {
        const sortedTeams = teamService.sortTeams(teams, "ascending");
        setTeams(sortedTeams);
        setAverage(average);
        setBenchmark(benchmark);
      })
      //This error handling could be improved if there was an API instead just a JSON being served 😅
      .catch((error) => {
        if (error.name !== "AbortError")
          setError("An error ocurred while getting teams");
      })
      .finally(() => setLoading(false));

    const abortRequest = () => {
      if (!abortController.signal.aborted) abortController.abort();
    };
    return abortRequest;
  };

  const sortTeams = (order: Sort) =>
    setTeams((teams) => {
      setSortOrder(order);
      const sortedTeams = teamService.sortTeams(teams, order);
      return sortedTeams;
    });

  useEffect(() => {
    const abortOngoingRequest = fetchTeams();
    return abortOngoingRequest;
  }, []);

  return {
    teams,
    average,
    benchmark,
    loading,
    error,
    sortOrder,
    sortTeams,
  };
};

export default useTeamComparison;
