import {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE} from "../../routing/Routes";
import {ProtectedRoute} from "../../routing/ProtectedRoute";
import history from "../../history";
import ClippedDrawer from "../../components/Drawer/Drawer";
import {Dashboard} from "../dashboard/dashboard";
import Employee from "../employee/employee";
import TimesheetPageContainer from "../timesheet/timesheet-page-container";

export class Home extends Component {

  public goToPage(path: string) {
    history.push(path);
  }

  public routes = new Map([
    ["Timesheet", ROUTE.timesheet],
    ["Dashboard", ROUTE.dashboard],
    ["Profile", ROUTE.employee]
  ]);

  render() {
    return (
        <>
          <ClippedDrawer routes={this.routes} goToPage={this.goToPage}>
            <Switch>
              <ProtectedRoute path={ROUTE.timesheet} exact component={TimesheetPageContainer} hasAuthorizationRights={true}/>
              <ProtectedRoute path={ROUTE.dashboard} component={Dashboard} hasAuthorizationRights={true}/>
              <ProtectedRoute path={ROUTE.employee} component={Employee} hasAuthorizationRights={true}/>
              <Route>
                <Redirect to={ROUTE.notFound}/>
              </Route>
            </Switch>
          </ClippedDrawer>
        </>
    )
  }
}
