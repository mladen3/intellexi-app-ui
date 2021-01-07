import {Component} from 'react';
import history from "../../history";

export class NotAuthorizedPage extends Component {

    render() {
        return (
            <div>
                <h1>401 Not authorized</h1>
                <button onClick={this.goToLoginPage}>Login</button>
            </div>
        );
    }

    goToLoginPage() {
        history.push("/");
    }
}
