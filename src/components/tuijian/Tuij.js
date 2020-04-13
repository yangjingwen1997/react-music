import React,{Component} from 'react';
import './tuij.css';
import propTypes from 'prop-types';
import {withRouter,NavLink} from 'react-router-dom'

class Tuij extends Component{
    render() {
        return (
            <div className="pic">
                <NavLink
                    to="/column"
                    className="figure"
                >
                    <img src="/images/tu1.jpg"/>
                        <figcaption>临近赤道的你...</figcaption>
                </NavLink>
                <NavLink
                    to="/column"
                    className="figure"
                >
                    <img src="/images/tu4.jpg"/>
                        <figcaption>民谣与烟嗓儿...</figcaption>
                </NavLink>
                <NavLink
                    to="/column"
                    className="figure"
                >
                    <img src="/images/tu3.jpg"/>
                        <figcaption>耳朵里的阳光...</figcaption>
                </NavLink>
            </div>
        );
    }
}
export default withRouter(Tuij)