import React from "react";

const ShowDetail = (props) => {
    const details = props.details;
    console.log(details);
    return <div>{details.input.number}</div>;

    // if (details.input.number) {
    //     return (
    //         <div>
    //             <div className='my-3'>You entered: {details.input.number}</div>
    //             {details.word > 0 ? <div>No Results </div> :
    //                 <div><h5>Results</h5>{details.word}</div>}
    //         </div>
    //     );
    // } else {
    //     return <div/>;
    // }
};

export default ShowDetail;