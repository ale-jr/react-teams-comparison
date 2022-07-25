import { Team } from 'interfaces/team'
import 'jest-styled-components'
import { render } from "testUtils"
import ComparisonTableRow from './index'


describe("ComparisonTableRow", () => {
    it("Should match snapshot", () => {
        const team: Team = {
            name: "Team A",
            alignment: 1,
            ambassadorship: 2,
            eNPS: 3,
            feedback: 4,
            happiness: 5,
            overallEngagement: 6,
            participation: 7,
            personalGrowth: 8,
            recognition: 9,
            relationshipWithManager: 10,
            relationshipWithPeers: 11,
            satisfaction: 12,
            wellness: 13
        }
        const teamComponent = render(<ComparisonTableRow team={team} type="team" />)
        expect(teamComponent.asFragment()).toMatchSnapshot()

        const averageComponent = render(<ComparisonTableRow team={team} type="average" />)
        expect(averageComponent).toMatchSnapshot()

        const benchmarkComponent = render(<ComparisonTableRow team={team} type="benchmark" />)
        expect(benchmarkComponent).toMatchSnapshot()
    })
})