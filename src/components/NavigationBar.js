import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NavigationBar extends Component {
    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><Link to='/'>Home</Link></td>
                            <td><Link to='/challenge'>Challenge</Link></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default NavigationBar;
