import * as React from 'react';
import {Component} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// import history from '../../history';
// import {ROUTE} from "../../routing/Routes";

import './login.css';
import {IAuth} from "../../model/common/IAuth";
import {connect} from "react-redux";
import {loginUserAction} from "../../store/auth/auth.actions";

interface IProps {
  login: (auth: IAuth) => void;
}

class LoginInner extends Component<IProps> {

  public username = "";
  public password = "";

  render() {
    return (
        <>
          {/*<CssBaseline />*/}
          <Container maxWidth="sm" className="Container">
            <Typography component="div" className="Login">
              <div className="middle">
                <h1 className="title">Login</h1>
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
      // history.push(ROUTE.timesheet);
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    login: (auth: IAuth) => dispatch(loginUserAction(auth))
  }
}

export const Login = connect(null, mapDispatchToProps)(LoginInner);
