import {Component} from 'react';
import {Timesheet} from "../Timesheet/Timesheet";
import {Dashboard} from "../../pages/dashboard/dashboard";
import {Redirect, Route, Switch} from "react-router-dom";
import {ROUTE} from "../../routing/Routes";
import {ProtectedRoute} from "../../routing/ProtectedRoute";
import Employee from "../Employee/Employee";
import history from "../../history";
import ClippedDrawer from "../../components/Drawer/Drawer";
import {IAppState} from "app-store";
import {connect} from "react-redux";

interface IProps {
    isAuthentificated: boolean;
}

export class HomeInner extends Component<IProps> {

    public goToPage(path: string) {
        history.push(path);
    }

    public routes = new Map([
        ["Timesheet", ROUTE.timesheet],
        ["Dashboard", ROUTE.dashboard],
        ["Employee", ROUTE.employee]
    ]);

    render() {
        const {isAuthentificated} = this.props;

        return (
            <>
                <ClippedDrawer routes={this.routes} goToPage={this.goToPage}>
                    <Switch>
                        <ProtectedRoute path={ROUTE.timesheet} exact component={Timesheet} hasAuthorizationRights={isAuthentificated}/>
                        <ProtectedRoute path={ROUTE.dashboard} component={Dashboard} hasAuthorizationRights={isAuthentificated}/>
                        <ProtectedRoute path={ROUTE.employee} component={Employee} hasAuthorizationRights={isAuthentificated}/>
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
