import React from "react";
import './Form.css';
import IsValid from "./IsValid";

function checkValidity(input) {
    //&& !input.includes('1') && input.length === 10
    return !isNaN(input);
}

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
            valid: checkValidity(value),
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
                           placeholder='Phone Number'
                           className='form-control pr-4'
                           value={this.state.input}
                           name='input'
                           onChange={this.onChange}
                           pattern="[0-9]*"/>
                    <div className='validityIndicator'>
                        <IsValid valid={this.state.valid} hasValue={this.state.hasValue}/>
                    </div>
                </div>
                {/*disabled={!this.state.valid}*/}
                <button className='btn btn-primary'
                        type='submit'
                        onClick={this.onSubmit}>Submit
                </button>
            </form>
        )
    }
}

export default Form;