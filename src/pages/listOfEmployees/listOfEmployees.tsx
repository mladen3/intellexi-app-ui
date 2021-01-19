import {Component} from 'react';
import {connect} from "react-redux";
import {IAppState} from "app-store";

import {IEmployee} from "../../model/common/IEmployee";
import {
  createEmployeeAction,
  deleteEmployeesAction,
  fetchEmployeesAction, updateEmployeeAction
} from "../../store/employees/employees.actions";
import {EmployeesTable} from "../../components/EmployeesTable/EmployeesTable";
import Plus from "../../components/Icons/Plus";
import CreateEmployeeFormDialog from "../../components/CreateEmployeeFormDialog/CreateEmployeeFormDialog";
import ViewEmployeeFormDialog from "../../components/ViewEmployeeFormDialog/ViewEmployeeFormDialog";

interface IProps {
  employees: IEmployee[] | undefined;
  fetchEmployees: () => void;
  deleteEmployee: (employee: IEmployee) => void;
  createEmployee: (employee: IEmployee) => void;
  updateEmployee: (employee: IEmployee) => void;
}

interface IState {
  createModalOpened: boolean;
  viewModalOpened: boolean;
  viewEmployee: IEmployee;
}

class ListOfEmployeesInner extends Component<IProps, IState> {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  state = {
    createModalOpened: false,
    viewModalOpened: false,
    viewEmployee: {} as IEmployee
  }

  render() {
    return (
        <>
          <EmployeesTable
              employees={this.props.employees}
              deleteEmployee={this.props.deleteEmployee}
              openViewEmployeeModal={this.openViewEmployeeModal.bind(this)}/>

          <Plus onClickHandler={this.openCreateEmployeeModal.bind(this)}/>

          <CreateEmployeeFormDialog
              open={this.state.createModalOpened}
              onClose={this.closeCreateEmployeeModal.bind(this)}
              createEmployee={this.createEmployee.bind(this)}/>

          <ViewEmployeeFormDialog
              open={this.state.viewModalOpened}
              employee={this.state.viewEmployee}
              onClose={this.closeViewEmployeeModal.bind(this)}
              updateEmployee={this.updateEmployee.bind(this)}/>
        </>
    );
  }

 // create employee
  openCreateEmployeeModal() {
    this.setState({createModalOpened: true});
  }

  closeCreateEmployeeModal() {
    this.setState({createModalOpened: false});
  }

  createEmployee(employee: IEmployee) {
    this.props.createEmployee(employee);
    this.closeCreateEmployeeModal();
  }

  // view and update employee
  openViewEmployeeModal(employee: IEmployee) {
    this.setState({viewModalOpened: true, viewEmployee: employee});
  }

  closeViewEmployeeModal() {
    this.setState({viewModalOpened: false, viewEmployee: {} as IEmployee});
  }

  updateEmployee(employee: IEmployee) {
    this.props.updateEmployee(employee);
    this.closeViewEmployeeModal();
  }

}

function mapStateToProps(state: IAppState) {
  return {
    employees: state.employees.data
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    fetchEmployees: () => dispatch(fetchEmployeesAction()),
    deleteEmployee: (employee: IEmployee) => dispatch(deleteEmployeesAction(employee)),
    createEmployee: (employee: IEmployee) => dispatch(createEmployeeAction(employee)),
    updateEmployee: (employee: IEmployee) => dispatch(updateEmployeeAction(employee))
  }
}

export const ListOfEmployees = connect(mapStateToProps, mapDispatchToProps)(ListOfEmployeesInner);
