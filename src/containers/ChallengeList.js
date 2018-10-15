import React, { Component } from 'react';
import { backendAPI } from '../BackendAPI';

import ChallengeListElement from '../components/ChallengeListElement';

export default class ChallengeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {challenges: []};
    }
    
    componentDidMount() {  
        backendAPI.getChallenges((retrievedChallenges) => {
            this.setState({ challenges: retrievedChallenges });
        });
    }
    
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.challenges.map((challenge) => {
                            return <ChallengeListElement key={challenge.id} challenge={challenge} />;
                        })}                 
                    </tbody>
                </table>
            </div>
        );
    }
}
