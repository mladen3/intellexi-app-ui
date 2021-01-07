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
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
        orange: {
            color: theme.palette.getContrastText(deepOrange[500]),
            backgroundColor: deepOrange[500],
        }
    }),
);

const ProfilePic = () => {

    const classes = useStyles();

    return (
        <Avatar alt="Remy Sharp" src="../../pp.png" className={[classes.large, classes.orange].join(" ")}/>
    )
}

export default ProfilePic;
