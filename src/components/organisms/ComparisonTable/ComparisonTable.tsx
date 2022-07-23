import ComparisonTableHeader from 'components/molecules/ComparisonTableHeader'
import ComparisonTableRow from 'components/molecules/ComparisonTableRow'
import { Sort } from 'interfaces/sort'
import { Team, TeamValues } from 'interfaces/team'
import { Table, TableContainer } from './style'

interface ComparisonTableProps {
    teams: Team[],
    benchmark?: TeamValues
    average?: TeamValues
    loading?: boolean
    sortOrder: Sort
    sortTeams: (sort: Sort) => void
}


const ComparisonTable: React.FC<ComparisonTableProps> = ({ teams, benchmark, average, loading, sortOrder, sortTeams }) => {

    return <TableContainer>
        <Table>
            <colgroup>
                <col className="wide" span={1} />
            </colgroup>
            <thead>
                <ComparisonTableHeader onSelectSort={sortTeams} sort={sortOrder} />
            </thead>
            <tbody>
                {benchmark && <ComparisonTableRow team={{
                    name: "Benchmark (all industries)",
                    ...benchmark
                }} type="benchmark" />}
                {average && <ComparisonTableRow team={{
                    name: "All Teams",
                    ...average
                }} type="average" />}
                {teams.map(team => <ComparisonTableRow team={team} type="team" />)}
            </tbody>
        </Table>
    </TableContainer>
}

export default ComparisonTable


