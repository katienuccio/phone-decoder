import React from "react";
import Form from "./Form";
import Result from "./Results";
import keyImage from './keyImage.png';

class Decode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            result: '',
            loading: false
        };
    }

    checkValidity = (input) => {
        return !isNaN(input) && !input.includes('1');
    };

    onSubmit = async (event) => {
        this.setState({input: event.input, result: '', loading: true});
        fetch(`https://6e1pagj9va.execute-api.us-east-1.amazonaws.com/dev/decode?input=${event.input}&verifyWord=true`)
            .then(resp => {
                if (!resp.ok) {
                    throw Error(resp.statusText);
                }
                return resp;
            })
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    loading: false,
                    result: data.decoded
                })
            })
            .catch(err => {
                this.setState({loading: false, result: null})
            });
    };

    render() {
        return (
            <div className='m-5'>
                <h2 className='row mx-1'>Decode</h2>
                <div className='row mx-1'>
                    <h5>Directions</h5>
                </div>
                <div className='row mx-1 mb-2'>
                    <h6>Input a ten digit phone number to discover what, if any, words can be created with the key
                        below.</h6>
                </div>
                <div className='row mx-1 mb-4'>
                    <div>
                        <h6><b>Key</b></h6>
                        <img src={keyImage} alt={'keypad'}/>
                    </div>
                </div>
                <div className='row mx-1 mb-2'>
                    <Form onSubmit={this.onSubmit} checkValidity={this.checkValidity}/>
                </div>
                <div className='row mx-1'>
                    <Result data={this.state}/>
                </div>
            </div>
        )
    }
}

export default Decode;