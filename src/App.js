import './App.css';
import {Router, Route, Switch} from "react-router-dom";

import {Home} from "./containers/Home/Home";
import history from "./history";
import {Login} from "./containers/Login/Login";
import {NotFoundPage} from "./containers/ErrorPage/NotFoundPage";

function App() {

    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/home" component={Home}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    );
}

export default App;
