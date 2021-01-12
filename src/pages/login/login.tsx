import * as React from 'react';
import {Component} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import './login.css';
import {IAuth} from "../../model/common/IAuth";
import {connect} from "react-redux";
import {loginUserAction} from "../../store/auth/auth.actions";
import {IAppState} from "app-store";
import {Alert} from "../../components/Alert/Alert";

interface IProps {
  error: any;
  login: (auth: IAuth) => void;
}

class LoginInner extends Component<IProps> {

  public username = "";
  public password = "";

  public errorMessage(error: any) {
    if (error === 500 || error === 504) {
      return "Service is not working";
    } else if (error === 403) {
      return "Incorrect username or password";
    } else {
      return "Status code " + error;
    }
  }

  render() {
    return (
        <>
          <Container maxWidth="sm" className="Container">
            <Typography component="div" className="Login">
              <div className="middle">
                <h1 className="title">Login</h1>
                {this.props.error ? <Alert severity="warning">{this.errorMessage(this.props.error)}</Alert> : null}
                <div>
                  <div className="TextField Username">
                    <TextField id="outlined-basic" label="Username" size="small" style={{backgroundColor: "white"}}
                               variant="outlined" onChange={(e) => this.username = e.target.value}/>
                  </div>
                  <div className="TextField Password">
                    <TextField id="outlined-basic" type="password" label="Password" size="small" style={{backgroundColor: "white"}}
                               variant="outlined" onChange={(e) => this.password = e.target.value}/>
                  </div>
                </div>
                <div className="goto">
                  <Button onClick={() => this.goHome(this.username, this.password)} variant="contained" color="primary">
                    Log in
                  </Button>
                </div>
              </div>
            </Typography>
          </Container>
        </>
    );
  }

  private goHome(username: string, password: string) {
    const auth: IAuth = {username: username, password: password} as IAuth;
    this.props.login(auth);
  }
}

function mapStateToProps(state: IAppState) {
  return {
    error: state.auth.error
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (auth: IAuth) => dispatch(loginUserAction(auth))
  }
}

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginInner);
