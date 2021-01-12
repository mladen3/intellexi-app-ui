import {Slide} from "@material-ui/core";
import * as React from "react";

const CustomSlide = (props: {direction: any, in: boolean, children: any}) => {

    return (
        <Slide direction={props.direction} in={props.in} mountOnEnter unmountOnExit timeout={{
            appear: 500,
            enter: 300,
            exit: 0,
        }}>
            <div>{props.children}</div>
        </Slide>
    )
}

export default CustomSlide;
