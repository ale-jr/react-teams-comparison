import { Team, TeamValues } from "interfaces/team";
import { Row, Cell } from './style'

interface ComparisonTableRow {
    team: Team
    type: 'team' | 'average' | 'benchmark'
}

const KEYS: (keyof TeamValues)[] = [
    'participation',
    'eNPS',
    'overallEngagement',
    'recognition',
    'feedback',
    'relationshipWithPeers',
    'relationshipWithManager',
    'satisfaction',
    'alignment',
    'happiness',
    'wellness',
    'personalGrowth',
    'ambassadorship'
]

const ComparisonTableRow: React.FC<ComparisonTableRow> = ({ team, type }) => {
    return <Row type={type}>
        <Cell>
            {team.name}
        </Cell>
        {
            KEYS.map(key => {
                const value = team[key]
                
                return <Cell value={type === "team" ? value : value} key={key}>
                    {value?.toFixed(1)}
                </Cell>
            })
        }
    </Row>
}

export default ComparisonTableRow