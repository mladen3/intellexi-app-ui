import * as React from 'react';
import {Component} from 'react';
import {Button, Container, TextField} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import history from '../../history';
import {ROUTE} from "../../routing/Routes";

import './login.css';

export class Login extends Component {

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
                        <TextField id="outlined-basic" label="Username" size="small"
                                   variant="outlined" onChange={(e) => this.username = e.target.value}/>
                      </div>
                      <div className="TextField Password">
                        <TextField id="outlined-basic" type="password" label="Password" size="small"
                                   variant="outlined" onChange={(e) => this.password = e.target.value}/>
                      </div>
                    </div>
                    <div className="goto">
                      <Button onClick={this.goHome} variant="contained" color="primary">
                        Log in
                      </Button>
                    </div>
                  </div>
                </Typography>
              </Container>
            </>
        );
    }

    goHome() {
        history.push(ROUTE.timesheet);
    }
}
