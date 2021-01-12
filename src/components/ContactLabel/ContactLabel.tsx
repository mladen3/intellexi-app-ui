import * as React from "react";
import {createStyles, Grid, Theme} from "@material-ui/core";

import "./ContactLabel.css";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "16px",
            marginBottom: "16px"
        },
        icon: {
            marginRight: "16px",
        },
        value: {
            margin: theme.spacing(1, 1),
            color: "darkgray"
        }
    }),
);

const ContactLabel = (props: { icon: any, value: string }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" alignItems="center">
                <Grid item className={classes.icon}>
                    {props.icon}
                </Grid>
                <Grid item className={classes.value}>
                    {props.value}
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactLabel;
