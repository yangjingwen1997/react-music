import React,{Component} from 'react';

import './header.css'
import {NavLink} from 'react-router-dom'

export default class Header extends Component{
  render(){
    return (
      <div className="nav">
        <ul>
            <li><NavLink to="/home" activeClassName="active">发现音乐</NavLink></li>
            <li><NavLink to="/friend" activeClassName="active">朋友</NavLink></li>
            <li><NavLink to="/cart" activeClassName="active">商城</NavLink></li>
            <li><NavLink to="/column" activeClassName="active">爱听音乐</NavLink></li>
        </ul>
      </div>
    )
  }
}