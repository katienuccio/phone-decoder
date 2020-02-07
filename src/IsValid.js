import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import React from "react";

function IsValid(props) {
    if (props.hasValue) {
        if (props.valid) {
            return <FontAwesomeIcon icon={faCheckSquare} color='green'/>;
        } else {
            return <FontAwesomeIcon icon={faTimesCircle} color='red'/>;
        }
    } else {
        return <div/>;
    }
}

export default IsValid;