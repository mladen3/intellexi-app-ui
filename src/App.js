import './App.css';
import {BrowserRouter, Route} from "react-router-dom";

import Timesheet from "./containers/Timesheet/Timesheet";
import Home from "./containers/Home/Home";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <div className="App">
                    <Route path="/" exact component={Home}/>
                    <Route path="/timesheet" exact component={Timesheet}/>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
