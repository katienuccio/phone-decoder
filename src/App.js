import React from 'react';
import './App.css';
import Header from './Header';
// noinspection ES6CheckImport
import {Route, Switch} from "react-router-dom";
import Encode from "./Encode";
import Decode from "./Decode";

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
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path='/encode' component={Encode}/>
                        <Route exact path='/decode' component={Decode}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
