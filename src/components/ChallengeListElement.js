import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class ChallengeListElement extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.challenge.name}</td>
                <td>{this.props.challenge.created}</td>
                <td><Link to={"/challenge/view/" + this.props.challenge.id}>Open</Link></td>
            </tr>
        )
    }
}
