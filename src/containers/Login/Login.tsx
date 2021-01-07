import {Component} from 'react';
import history from "../../history";
import {ROUTE} from "../../routing/Routes";

export class Login extends Component {

    render() {
        return (
            <div>
                <h1>Login screen</h1>
                <button onClick={this.goHome}>home screen</button>
            </div>
        );
    }

    goHome() {
        history.push(ROUTE.timesheet);
    }
}
