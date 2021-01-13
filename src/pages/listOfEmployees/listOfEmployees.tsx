import {Component} from 'react';
import {connect} from "react-redux";
import {IAppState} from "app-store";

import {IEmployee} from "../../model/common/IEmployee";
import {
  createEmployeeAction,
  deleteEmployeesAction,
  fetchEmployeesAction
} from "../../store/employees/employees.actions";
import {EmployeesTable} from "../../components/EmployeesTable/EmployeesTable";
import Plus from "../../components/Icons/Plus";
import CreateUserFormDialog from "../../components/CreateUserFormDialog/CreateUserFormDialog";

interface IProps {
  employees: IEmployee[] | undefined;
  fetchEmployees: () => void;
  deleteEmployee: (id: number) => void;
  createEmployee: (employee: IEmployee) => void;
}

interface IState {
  modalOpened: boolean;
}

class ListOfEmployeesInner extends Component<IProps, IState> {

  componentDidMount() {
    this.props.fetchEmployees();
  }

  state = {
    modalOpened: false
  }

  render() {
    return (
        <>
          <EmployeesTable
              employees={this.props.employees}
              deleteEmployee={this.props.deleteEmployee}/>

          <Plus onClickHandler={this.openCreateEmployeeModal.bind(this)}/>

          <CreateUserFormDialog
              open={this.state.modalOpened}
              onClose={this.closeCreateEmployeeModal.bind(this)}
              createEmployee={this.createEmployee.bind(this)}/>
        </>
    );
  }

  openCreateEmployeeModal() {
    this.setState({modalOpened: true});
  }

  closeCreateEmployeeModal() {
    this.setState({modalOpened: false});
  }

  createEmployee(employee: IEmployee) {
    this.props.createEmployee(employee);
    this.closeCreateEmployeeModal();
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
    deleteEmployee: (id: number) => dispatch(deleteEmployeesAction(id)),
    createEmployee: (employee: IEmployee) => dispatch(createEmployeeAction(employee))
  }
}

export const ListOfEmployees = connect(mapStateToProps, mapDispatchToProps)(ListOfEmployeesInner);
