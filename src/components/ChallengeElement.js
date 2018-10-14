import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ChallengeElement extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.challenge.name}</td>
                <td>{this.props.challenge.created}</td>
                <td><Link to="/challenge/view/">Open</Link></td>
            </tr>
        )
    }
}

export default ChallengeElement;
