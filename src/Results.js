import React from "react";
import Loader from "./Loader";
import ShowDetail from "./ShowDetails";

const Result = (props) => {
    if (props.result.loading) return <Loader />;
    return <ShowDetail details={props.result}/>
};

export default Result;