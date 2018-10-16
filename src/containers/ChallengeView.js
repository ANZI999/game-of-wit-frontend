import React, { Component } from 'react';
import { backendAPI } from '../BackendAPI';

export default class ChallengeView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {challenge: null};
    }
    
    componentDidMount() {  
        backendAPI.getChallenge(this.props.match.params.id, (retrievedChallenge) => {
            this.setState({ challenge: retrievedChallenge });
        });
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
