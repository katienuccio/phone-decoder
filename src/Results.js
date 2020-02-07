import React from "react";
import Loader from "./Loader";

const Result = (props) => {
    const data = props.data;
    if (data.loading) return <Loader/>;
    if (data.input) {
        return (
            <div>
                <div className='my-3'>You entered: {data.input}</div>
                {!data.result ?
                    <div>No Results </div> :
                    <div><h5>Results</h5>{data.result}</div>}
            </div>
        );
    } else {
        return <div/>;
    }
};

export default Result;