import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';

function Result(props) {
    const result = props.result;
    if (Object.keys(result).length) {
        return <div className='mt-5'>You entered: {result.number}</div>;
    } else {
        return <div/>;
    }
}

function Loader(props) {
    if (props.isLoading) {
        return <div>Loading...</div>;
    }
    return <div/>;
}

const dictionary = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'prs',
    8: 'tuv',
    9: 'wxy',
    0: 'z'
};

function printWordsUtil(numbers, curr, output, n, words) {
    if (curr === n) {
        return output;
    }

    // Try all 3 possible characters for current digits in number[] and recur for remaining digits
    for (let i = 0; i < dictionary[numbers[curr]].length; i++) {
        output += dictionary[numbers[curr]].charAt(i);
        let temp = printWordsUtil(numbers, curr + 1, output, n, words);
        if (typeof temp === 'string' || temp instanceof String) {
            words.push(temp);
        }
        output = output.substring(0,output.length - 1);
    }
    return words;
}

class App extends React.Component {
    state = {
        input: {},
        valid: false,
        hasValue: false,
        words: [],
        isLoadingWords: false,
        isCheckingWords: false
    };

    onChange = (input) => {
        this.setState({valid: !isNaN(input), hasValue: Object.keys(input).length});
    };

    onSubmit = (x) => {
        this.setState({input: x, hasValue: x.hasValue, isLoadingWords: true});
        console.log(this.state);
        let input = x.number.split('');
        const n = input.length;
        this.setState({words: printWordsUtil(input, 0, [], n, []), isLoadingWords: false});
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <Header/>
                <div className='container'>
                    <Form onSubmit={input => this.onSubmit(input)} onChange={input => this.onChange(input)}/>
                    <i>NOTE: 1 is not a valid number</i>
                    <Loader isLoading={this.state.isLoadingWords}/>
                    <Result result={this.state.input}/>
                    <ul>{this.state.words.map(el => <li key={el}> {el} </li>)}</ul>
                </div>
            </div>
        );
    }
}

export default App;
