import {Component} from 'react';
import {Timesheet} from "../Timesheet/Timesheet";
import {Dashboard} from "../Dashboard/Dashboard";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE} from "../../Routing/Routes";
import {ProtectedRoute} from "../../Routing/ProtectedRoute";

export class Home extends Component {
    render() {
        return (
            <>
                <div>
                    <a href={ROUTE.timesheet}>timesheet component</a>
                    <a href={ROUTE.dashboard}>dashboard</a>
                </div>

                <Switch>
                    <ProtectedRoute path={ROUTE.timesheet} exact component={Timesheet} hasAuthorizationRights={true}/>
                    <ProtectedRoute path={ROUTE.dashboard} component={Dashboard} hasAuthorizationRights={true}/>
                    <Route>
                        <Redirect to={ROUTE.notFound}/>
                    </Route>
                </Switch>
            </>
        )
    }
}