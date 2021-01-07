import * as React from "react";

import {Avatar, createStyles, Theme} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
        },
        large: {
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        }
    }),
);

const ProfilePic = (props: {firstName: string, lastName: string}) => {

    const classes = useStyles();

    return (
        <Avatar alt={props.firstName} src="../../pp.png" className={[classes.large, classes.orange].join(" ")}/>
    )
}

export default ProfilePic;
