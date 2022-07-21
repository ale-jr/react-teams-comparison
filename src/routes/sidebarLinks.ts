import { SidebarLink } from "interfaces/sidebarLinks";
import { faHome, faChartLine, faComment, faBullseye } from "@fortawesome/free-solid-svg-icons"
const links: SidebarLink[] = [
    {
        title: "Home",
        to: "/",
        icon: faHome,
    }, {
        title: "Analysis",
        to: "/analysis",
        icon: faChartLine,
        links: [
            {
                title: "Survey report",
                to: "/survey-report",
            },
            {
                title: "Comparison",
                to: "/comparison"
            },
            {
                title: "Custom polls",
                to: "/custom-polls"
            }
        ]
    },
    {
        title: "Feedback",
        to: "/feedback",
        icon: faComment
    },
    {
        title: "Goals",
        to: "/goals",
        icon: faBullseye
    }
]

export default links