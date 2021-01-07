import * as React from "react";
import {createStyles, Grid, Theme} from "@material-ui/core";

import "./InfoLabel.css";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            marginTop: "16px",
            marginBottom: "16px"
        },
        label: {
            marginRight: "8px",
            width: "20%"
        },
        value: {
            margin: theme.spacing(1, 1),
            color: "darkgray"
        }
    }),
);

const InfoLabel = (props: { label: any, value: string }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container direction="row" alignItems="center">
                <Grid item className={classes.label}>
                    {props.label}
                </Grid>
                <Grid item className={classes.value}>
                    {props.value}
                </Grid>
            </Grid>
        </div>
    )
}

export default InfoLabel;
