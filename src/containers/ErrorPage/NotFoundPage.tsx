import {Component} from 'react';
import history from "../../history";

export class NotFoundPage extends Component {

    render() {
        return (
            <div>
                <h1>404 Not found</h1>
                <button onClick={this.goToLoginPage}>Login page</button>
            </div>
        );
    }

    goToLoginPage() {
        history.push("/");
    }
}
