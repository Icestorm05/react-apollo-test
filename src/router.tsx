import React, { SFC } from "react";
import Loadable from "react-loadable";
import { BrowserRouter as Router, Route } from "react-router-dom";

const loading: SFC = () => <div>Loading...</div>;

const HomePage = Loadable({
    loader: () => import("./routes/Home"),
    loading
});

const AppRouter: SFC = () => (
    <Router>
        <Route path="/" component={HomePage} />
    </Router>
);

export default AppRouter;
