import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./pages/home/home";
import Timesheet from "./pages/timesheet/timesheet";
import Employee from "./pages/employee/employee";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="App">
                    <Route path="/" exact component={Home}/>
                    <Route path="/timesheet" exact component={Timesheet}/>
                    <Route path="/employee" exact component={Employee}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
