import { BrowserRouter, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import Home from "components/pages/Home"
import NotFound from "components/pages/NotFound"

const Routes: React.FC = () =>
    <BrowserRouter>
        <ReactRouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
        </ReactRouterRoutes>
    </BrowserRouter>
export default Routes