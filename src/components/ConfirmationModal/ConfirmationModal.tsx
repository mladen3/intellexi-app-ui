import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React, {Component} from "react";
import {connect} from "react-redux";
import {IAppState} from "app-store";
import {cancelAction, confirmAction} from "../../store/confirmModal/confirm.actions";

interface IProps {
  cancelAction: () => void;
  confirmAction: () => void;
  message: string;
  modalOpened: boolean;
  cancelNotActive: boolean | undefined;
}

class ConfirmationModalInner extends Component<IProps>{

  render () {
    return (
        <div>
          <Dialog open={this.props.modalOpened} onClose={this.props.cancelAction} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Confirm modal</DialogTitle>
            <DialogContent>
              {this.props.message}
            </DialogContent>
            <DialogActions>
              {!this.props.cancelNotActive &&
              <Button onClick={this.props.cancelAction} color="primary">
                Cancel
              </Button>}
              <Button onClick={this.props.confirmAction} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
        </div>
    );
  }
}

function mapStateToProps(state: IAppState) {
  return {
    message: state.confirmModal.message,
    modalOpened: state.confirmModal.modalOpened,
    cancelNotActive: state.confirmModal.cancelNotActive
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    cancelAction: () => dispatch(cancelAction()),
    confirmAction: () => dispatch(confirmAction())
  }
}

export const ConfirmationModal = connect(mapStateToProps, mapDispatchToProps)(ConfirmationModalInner);
