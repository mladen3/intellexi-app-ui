import * as React from "react";

import {Avatar, createStyles, Theme} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: theme.spacing(10),
            height: theme.spacing(10),
        },
    }),
);

const ProfilePic = () => {

    const classes = useStyles();

    return (
        <Avatar alt="Remy Sharp" src="../../pp.png" className={classes.large}/>
    )
}

export default ProfilePic;
