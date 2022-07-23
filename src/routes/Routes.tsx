import { BrowserRouter, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "components/pages/Home"
import NotFound from "components/pages/NotFound"
import PageWithNavigation from "components/templates/PageWithNavigation";
import ComparisonTable from "components/pages/ComparisonTable";


const Routes: React.FC = () => {
    return <BrowserRouter>
        <PageWithNavigation>
            <ReactRouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/comparison" element={<ComparisonTable />} />
                <Route path="*" element={<NotFound />} />
            </ReactRouterRoutes>
        </PageWithNavigation>

    </BrowserRouter>
}
export default Routes