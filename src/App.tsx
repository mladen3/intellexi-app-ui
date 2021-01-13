import './App.css';
import {Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";

import {Home} from "./pages/home/home";
import history from "./history";
import {Login} from "./pages/login/login";
import {NotFoundPage} from "./pages/errorPages/notFoundPage";
import {ROUTE} from "./routing/Routes";
import {ProtectedRoute} from "./routing/ProtectedRoute";
import {NotAuthorizedPage} from "./pages/errorPages/notAuthorizedPage";
import {store} from "./store/store";

function App() {

    return (
        <Provider store={store}>
          <Router history={history}>
              <Switch>
                  <Route path={ROUTE.login} exact component={Login}/>
                  <ProtectedRoute path={ROUTE.timesheet} component={Home} hasAuthorizationRights={true}/>
                  <Route path={ROUTE.notAuthorized} component={NotAuthorizedPage}/>
                  <Route component={NotFoundPage}/>
              </Switch>
          </Router>
        </Provider>
    );
}

export default App;
