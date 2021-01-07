import {Redirect, Route, RouteProps} from "react-router-dom";
import {ROUTE} from "./Routes";

interface IProps extends RouteProps {
    hasAuthorizationRights: boolean;
}

export class ProtectedRoute extends Route<IProps> {
    render () {
        if (this.props.hasAuthorizationRights) {
            return <Route {...this.props}/>;
        } else {
            return <Redirect to={ROUTE.notAuthorized}/>;
        }
    }
}