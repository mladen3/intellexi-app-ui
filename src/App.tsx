import './App.css';
import {Router, Route, Switch} from "react-router-dom";

import {Home} from "./containers/Home/Home";
import history from "./history";
import {Login} from "./pages/login/login";
import {NotFoundPage} from "./pages/errorPages/notFoundPage";
import {ROUTE} from "./routing/Routes";
import {ProtectedRoute} from "./routing/ProtectedRoute";
import {NotAuthorizedPage} from "./pages/errorPages/notAuthorizedPage";

function App() {

    return (
        <Router history={history}>
            <Switch>
                <Route path={ROUTE.login} exact component={Login}/>
                <ProtectedRoute path={ROUTE.timesheet} component={Home} hasAuthorizationRights={true}/>
                <Route path={ROUTE.notAuthorized} component={NotAuthorizedPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}

export default App;
