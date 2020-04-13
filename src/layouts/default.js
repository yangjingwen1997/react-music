import React from 'react';
import {connect} from 'react-redux';
import Login from "../pages/Login";
import App from "./App";



function Auth({user:{err}}){
    if (err===2) { return <Login/> }
    if (err===1) { return <Login/> }
    return <App/>
}

export default connect(
    state=>({user:state.user})
)(Auth)