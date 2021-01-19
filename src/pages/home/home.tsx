import {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE} from "../../routing/Routes";
import {ProtectedRoute} from "../../routing/ProtectedRoute";
import history from "../../history";
import ClippedDrawer from "../../components/Drawer/Drawer";
import {Dashboard} from "../dashboard/dashboard";
import Employee from "../employee/employee";
import {TimeSheetPageContainer} from "../timesheet/timesheet-page-container";
import {ListOfEmployees} from "../listOfEmployees/listOfEmployees";
import {IAppState} from "app-store";
import {connect} from "react-redux";

class HomeInner extends Component {

  public goToPage(path: string) {
    history.push(path);
  }

  public routes = new Map([
    ["Timesheet", ROUTE.timesheet],
    ["Dashboard", ROUTE.dashboard],
    ["Profile", ROUTE.employee],
    ["List of Employees", ROUTE.listOfEmployees]
  ]);

  render() {
    return (
        <>
          <ClippedDrawer routes={this.routes} goToPage={this.goToPage}>
            <Switch>
              <ProtectedRoute path={ROUTE.timesheet} exact component={TimeSheetPageContainer} hasAuthorizationRights={true}/>
              <ProtectedRoute path={ROUTE.dashboard} component={Dashboard} hasAuthorizationRights={true}/>
              <ProtectedRoute path={ROUTE.employee} component={Employee} hasAuthorizationRights={true}/>
              <ProtectedRoute path={ROUTE.listOfEmployees} component={ListOfEmployees} hasAuthorizationRights={true}/>
              <Route>
                <Redirect to={ROUTE.notFound}/>
              </Route>
            </Switch>
          </ClippedDrawer>
        </>
    )
  }
}


function mapStateToProps(state: IAppState) {
  return {
    isAuthentificated: state.auth.isAuthentificated
  }
}

export const Home = connect(mapStateToProps, null)(HomeInner);
