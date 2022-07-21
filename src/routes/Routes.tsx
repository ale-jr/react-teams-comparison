import { BrowserRouter, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "components/pages/Home"
import NotFound from "components/pages/NotFound"
import PageWithNavigation from "components/templates/PageWithNavigation";

const Routes: React.FC = () =>
    <BrowserRouter>
        <PageWithNavigation>
            <ReactRouterRoutes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </ReactRouterRoutes>
        </PageWithNavigation>

    </BrowserRouter>
export default Routes