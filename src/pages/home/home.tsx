import {Component} from "react";
import wip from '../../wip.gif';

class Home extends Component<any, any> {
    render() {
        return (
            <header className="App-header">
                <img src={wip} className="App-logo" alt="logo"/>

                <p>
                    Intellexi App in development...
                </p>
                <a
                    className="App-link"
                    href="https://drive.google.com/drive/folders/1JdeLnMGu5Rxz8qxLUVE1VUxbHMk5tFZf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Shared Google Drive folder
                </a>
                <br/><br/>
                <a
                    className="App-link"
                    href="https://github.com/mladen3/intellexi-app-web"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub repo for intellexi-app-web
                </a>
                <br/><br/>
                <p style={{cursor: "pointer"}} onClick={() => this.props.history.push('/timesheet')}>
                    Timesheet component
                </p>

            </header>
        )
    }
}

export default Home;
