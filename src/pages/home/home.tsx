import wip from '../../wip.gif';
import {IAppState} from "app-store";
import {fetchEmployeesAction} from "../../store/employees/employees.actions";
import {connect} from "react-redux";
import {IEmployee} from "../../model/common/IEmployee";
import {RouteComponentProps} from "react-router";

interface IProps extends RouteComponentProps<any> {
  employees: IEmployee[];
  fetchEmployees: () => void;
}

const HomeInner = (props: IProps) => {
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
                <p style={{cursor: "pointer"}} onClick={() => props.history.push('/timesheet')}>
                    Timesheet component
                </p>
                <br/><br/>
                <p>
                  {props.employees.map(e => {
                    return `${e.firstName} ${e.lastName} - `
                  })}
                </p>
                <br/><br/>
                <p style={{cursor: "pointer"}} onClick={() => props.fetchEmployees()}>
                  Dohvati zaposlenike
                </p>

            </header>
        )
}

function mapStateToProps(state: IAppState) {
  return {
    employees: state.employees.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchEmployees: () => dispatch(fetchEmployeesAction())
  }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeInner);
