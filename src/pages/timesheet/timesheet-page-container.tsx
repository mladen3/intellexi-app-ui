import * as React from "react";
import {Component} from "react";
import Timesheet from "./timesheet";



// interface IProps{
//
// }
//
// interface IState{
//
// }
export class TimesheetPageContainer extends Component<any, any> {

    public render() {

        return (
          <React.Fragment>
              <Timesheet />
          </React.Fragment>
        )
    }
}

// function mapStateToProps(){
//     return {
//
//     }
// }
//
//
// function mapDispatchToProps(dispatch: any){
//     return{
//
//     }
// }

// export const TimeSheetPageContainer = connect(mapStateToProps,mapDispatchToProps)(TimesheetPageContainer);
export default TimesheetPageContainer;
