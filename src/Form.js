import React from "react";
import './Form.css';
import IsValid from "./IsValid";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            valid: false,
            hasValue: false
        };
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            valid: this.props.checkValidity(value),
            hasValue: Object.keys(value).length > 0,
            [name]: value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        // reset form
        this.setState({
            input: '',
            valid: false,
            hasValue: false
        })
    };

    render() {
        return (
            <form className='form-inline'>
                <div className='form-group with-icon mr-2'>
                    <input type='text'
                           placeholder='Input'
                           className='form-control pr-4'
                           value={this.state.input}
                           name='input'
                           onChange={this.onChange}/>
                    <div className='validityIndicator'>
                        <IsValid valid={this.state.valid} hasValue={this.state.hasValue}/>
                    </div>
                </div>
                <button className='btn btn-primary'
                        type='submit'
                        disabled={!this.state.valid}
                        onClick={this.onSubmit}>Submit
                </button>
            </form>
        )
    }
}

export default Form;