import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import moment from "moment";
import {IEvent} from "../model/common/IEvent";

interface IProps{
    calendarEvents: IEvent[] | undefined
}

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
export const WorkingHoursModal = (props:IProps) => {
    const classes = useStyles();
    return(
          <div>
              <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                          <TableRow>
                              <TableCell>Title</TableCell>
                              <TableCell align="right">Start</TableCell>
                              <TableCell align="right">End</TableCell>
                          </TableRow>
                      </TableHead>
                      <TableBody>
                          {props.calendarEvents?.map((event:any) => (
                            <TableRow key={event.id}>
                                <TableCell component="th" scope="row">
                                    {event.title}
                                </TableCell>
                                <TableCell align="right">{moment(event.start).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                                <TableCell align="right">{moment(event.end).format('MMMM Do YYYY, h:mm:ss a')}</TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                  </Table>
              </TableContainer>
          </div>
        )
    }
