import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Employee from "./pages/employee/employee";
import TimeSheetPageContainer from "./pages/timesheet/timesheet-page-container";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="App">
                    <Route path="/" exact component={Home}/>
                    <Route path="/timesheet" exact component={TimeSheetPageContainer}/>
                    <Route path="/employee" exact component={Employee}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
