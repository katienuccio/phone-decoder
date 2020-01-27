import React from 'react';
import './App.css';
import Header from './Header';
import Form from './Form';
import Result from './Results';
// import Dict from './TenLetters';
import keyImage from './keyImage.png';

// function generateWordsUtil(numbers, curr, output, n, words) {
//     const key = {
//         2: 'ABC',
//         3: 'DEF',
//         4: 'GHI',
//         5: 'JKL',
//         6: 'MNO',
//         7: 'PRS',
//         8: 'TUV',
//         9: 'WXY',
//         0: 'Z'
//     };
//
//     if (curr === n) {
//         return output;
//     }
//
//     // Try all possible characters for current digits in numbers[] and recur for remaining digits
//     for (let i = 0; i < key[numbers[curr]].length; i++) {
//         output += key[numbers[curr]].charAt(i);
//         let temp = generateWordsUtil(numbers, curr + 1, output, n, words);
//         if (typeof temp === 'string' || temp instanceof String) {
//             if (Dict().indexOf(temp.toLowerCase()) !== -1) {
//                 words.push(temp);
//             }
//         }
//         output = output.substring(0, output.length - 1);
//     }
//     return words;
// }

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            input: {},
            word: '',
            loading: false
        };
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    };

    onSubmit = async (x) => {
        this.setState({input: x, hasValue: x.hasValue, word: [], loading: true});
        // const body = {
        //     number: x.number
        // };
        // const request = new Request('https://k8abwkw1kc.execute-api.us-east-2.amazonaws.com/default/generateWords', {
        //     method: 'POST',
        //     mode: 'no-cors',
        //     body: JSON.stringify(body)
        // });
        const request = new Request('https://swapi.co/api/people/1');
        fetch(request)
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    word: data.name
                })
            });
        // console.log(response);
        // this.setState({word: response.json(), loading: false});
        // return await response;
    };

    render() {
        return (
            <div>
                <Header/>
                <div className='m-5'>
                    <div className='row mx-1 mb-2'>
                        <h5>Directions</h5>
                        <h6>Input a ten digit phone number to discover what, if any, words can be created with the key
                            below.</h6>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <Form onSubmit={input => this.onSubmit(input)} onChange={this.handleChange}/>
                            <Result result={this.state}/>
                        </div>
                        <div className='col'>
                            <img src={keyImage} alt={'keypad'}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
