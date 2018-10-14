import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ChallengeList from './ChallengeList';
import NavigationBar from '../components/NavigationBar';
import './App.css';

class App extends Component {    
    render() {
        return (
            <div className="App">
                <NavigationBar />
                <Switch>
                    <Route exact path='/' >
                        <div>Time</div>
                    </Route>
                    <Route exact path='/challenge' component={ChallengeList}/>
                </Switch>
            </div>
        );
    }
}

export default App;
