import MessageContainer from "components/molecules/MessageContainer";
import ComparisonTable from "components/organisms/ComparisonTable";
import useTeamComparison from "hooks/useTeamComparison";



const ComparisonTableContainer: React.FC = () => {
    const { teams, loading, sortOrder, sortTeams, average, benchmark, error } = useTeamComparison()
    if (error) return <MessageContainer message={error} type="error" />
    if (loading) return <MessageContainer message="Loading teams" type="loading" />
    return <ComparisonTable average={average} benchmark={benchmark} loading={loading} teams={teams} sortOrder={sortOrder} sortTeams={sortTeams} />
}

export default ComparisonTableContainer