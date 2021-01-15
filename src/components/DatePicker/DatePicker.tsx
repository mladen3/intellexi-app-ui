import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
    }),
);

interface IProps {
  setDate: (date: Date) => void;
  date?: Date | undefined;
}

export default function DatePicker(props: IProps) {
  const classes = useStyles();

  const setAndFormatDate = (date: string) => {
    const formatedDate: Date = moment(date).toDate();
    props.setDate(formatedDate);
  }

  return (
      <form className={classes.container} noValidate>
        <TextField
            id="date"
            label="Date of birthday"
            type="date"
            defaultValue={props.date ? props.date : "0000-00-00"}
            onChange={(e) => setAndFormatDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
        />
      </form>
  );

}
