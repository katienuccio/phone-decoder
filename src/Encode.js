import React from "react";
import Form from "./Form";
import Result from "./Results";
import keyImage from "./keyImage.png";

class Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: '',
            loading: false
        };
    }

    onSubmit = async (event) => {
        this.setState({input: event.input, result: '', loading: true});
        const url = `https://6e1pagj9va.execute-api.us-east-1.amazonaws.com/dev/encode?code=${event.input}`;
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    loading: false,
                    result: data.encoded
                })
            });
    };

    render() {
        return (
            <div className='m-5'>
                <div className='row mx-1'>
                    <h5>Directions</h5>
                </div>
                <div className='row mx-1 mb-2'>
                    <h6>Input a word to receive the code using the key below.</h6>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Form onSubmit={this.onSubmit}/>
                        <Result data={this.state}/>
                    </div>
                    <div className='col'>
                        <h6><b>Key</b></h6>
                        <img src={keyImage} alt={'keypad'}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Encode;