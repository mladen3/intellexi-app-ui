import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";
import React from "react";
import {useFormik} from "formik";
import * as yup from 'yup';
import moment from "moment";
interface IProps{
    open: boolean;
    handleClose: () => void;
    editEvent: any;
    addNewEventHandler: (values:any) => void; //to do use type(IEvent) instead any
    checkIfNew: boolean;
    updateEvent: (values: any) => void // to do use type(IEvent) instead any
    deleteEvent: (eventId: number) => void;
}

const validationSchema = yup.object({
    title: yup
      .string()
      .max(30, "Field too long")
      .required('Title of event is required'),
    start: yup
      .date()
      .required('Start date of event is required'),
    end: yup
      .date()
      .required('End of event is required')
});


export const EventsEdit = (props:IProps) => {
        const formik = useFormik({
            initialValues: {
                title: !props.checkIfNew ? props.editEvent.title : '',
                start: !props.checkIfNew ? moment(props.editEvent.start).format("YYYY-MM-DD[T]HH:mm") : moment().format("YYYY-MM-DD[T]HH:mm"),
                end: !props.checkIfNew ? moment(props.editEvent.end).format("YYYY-MM-DD[T]HH:mm") : moment().format("YYYY-MM-DD[T]HH:mm"),
                editable: !props.checkIfNew ? props.editEvent.editable : true,
                id: !props.checkIfNew ? props.editEvent.id : undefined
            },
            validationSchema: validationSchema,
            onSubmit: (values) => {
                if (props.checkIfNew) {
                    props.addNewEventHandler(values);
                } else {
                    props.updateEvent(values);
                }
                console.log(formik.errors);
            },
            enableReinitialize: true
        });

    return (
      <div>
          <Dialog open={props.open} aria-labelledby="form-dialog-title">
              <form onSubmit={formik.handleSubmit}>
              <DialogTitle id="form-dialog-title">Edit existing event</DialogTitle>
              <DialogContent>
                  <DialogContentText>
                      Fill all in order to edit event
                  </DialogContentText>
                          <div className="TextField">
                              <TextField
                                fullWidth
                                autoFocus
                                id="title"
                                name="title"
                                label="Title of event"
                                defaultValue={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.title && Boolean(formik.errors.title)}
                                helperText={formik.touched.title && formik.errors.title}/>
                          </div>
                          <div className="TextField">
                              <TextField
                                  fullWidth
                                  autoFocus
                                  id="start"
                                  label="Start of event"
                                  type="datetime-local"
                                  value={formik.values.start}
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  error={formik.touched.start && Boolean(formik.errors.start)}
                                  helperText={formik.touched.start && formik.errors.start}
                                  />

                          </div>
                          <div className="TextField">
                              <TextField
                                fullWidth
                                autoFocus
                                id="end"
                                label="End of event"
                                type="datetime-local"
                                value={formik.values.end}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                error={formik.touched.end && Boolean(formik.errors.end)}
                                helperText={formik.touched.end && formik.errors.end}
                              />
                          </div>
              </DialogContent>
              <DialogActions>
                  <Button  onClick={props.handleClose} color="primary">
                      Cancel
                  </Button>
                  {!props.checkIfNew ?  <Button  color="primary" type="submit" >UPDATE</Button> : <Button color="primary" type="submit">ADD NEW</Button>}
                  <Button color="secondary" disabled={props.checkIfNew} onClick={() => props.deleteEvent(props.editEvent.id)}>DELETE</Button>
              </DialogActions>
              </form>
          </Dialog>
      </div>
    );
}
