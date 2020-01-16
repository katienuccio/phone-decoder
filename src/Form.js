import React from "react";
import './Form.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare} from '@fortawesome/free-solid-svg-icons';
import {faTimesCircle} from "@fortawesome/free-solid-svg-icons";

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

class Form extends React.Component {
    state = {
        number: '',
        valid: false,
        hasValue: false
    };

    onChange = (e) => {
        this.setState({
            valid: !isNaN(e.target.value) && !e.target.value.includes('1'),
            hasValue: Object.keys(e.target.value).length > 0
        });
        this.setState({[e.target.name]: e.target.value});
        this.props.onChange(e.target.value);
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            number: '',
            valid: false,
            hasValue: false
        })
    };

    render() {
        return (
            <form className='form-inline'>
                <div className='form-group with-icon mr-2'>
                    <input type='text' placeholder='Phone Number' className='form-control pr-4'
                           value={this.state.number}
                           name='number' onChange={e => this.onChange(e)} pattern="[0-9]*"/>
                    <div className='validityIndicator'>
                        <IsValid valid={this.state.valid} hasValue={this.state.hasValue}/>
                    </div>
                </div>
                <button className='btn btn-primary' type='submit' onClick={(e) => this.onSubmit(e)}
                        disabled={!this.state.valid}>Submit
                </button>
            </form>
        )
    }
}

export default Form;