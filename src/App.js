import React from 'react';
import Header from './Header';
import {Redirect, Route, Switch} from "react-router-dom";
import Encode from "./Encode";
import Decode from "./Decode";

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path='/encode' component={Encode}/>
                        <Route exact path='/decode' component={Decode}/>
                        <Route exact path='/'>
                            <Redirect to='/encode'/>
                        </Route>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
