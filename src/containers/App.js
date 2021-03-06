import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ChallengeList from './ChallengeList';
import ChallengeView from './ChallengeView';
import ChallengeCreate from './ChallengeCreate';
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
                    <Route exact path='/challenge/create' component={ChallengeCreate}/>
                    <Route exact path='/challenge/view/:id' component={ChallengeView}/>
                </Switch>
            </div>
        );
    }
}

export default App;
