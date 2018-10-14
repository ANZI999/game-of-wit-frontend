import React, { Component } from 'react';
import { stateStore } from '../StateStore';

import ChallengeElement from '../components/ChallengeElement';

class ChallengeList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {challenges: []};
    }
    
    componentDidMount() {  
        stateStore.getChallenges((retrievedChallenges)=> {
            this.setState({ challenges: retrievedChallenges });
        });
    }
    
    
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.challenges.map((challenge) => {
                            return <ChallengeElement key={challenge.id} challenge={challenge} />;
                        })}                 
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ChallengeList;
