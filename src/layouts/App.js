import React,{Component} from 'react';

import Header from "./header";
import Footer from "./footer";
import Loading from "../components/loading/loading";

import {Switch,Route,Redirect} from 'react-router-dom'

import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Column from "../pages/Column";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
import Detail from "../pages/Detail";
import Detail2 from "../pages/Detail2";
import NoPage from "../pages/NoPage";
import Friend from "../pages/Friend";

import {connect} from 'react-redux'
import {viewGlobal} from '../store/actionCreators'
import Auth from '../guard/Auth'
class App extends Component{
    state={};

    static getDerivedStateFromProps(nextProps,nextState){
        window.scrollTo(0,0)

        let path = nextProps.location.pathname;
        if (/home|cart|column|friend/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',true));
            nextProps.dispatch(viewGlobal('UPDATE_FOOT',true))
        }

        if (/login|reg|detail|detail2/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',false));
            nextProps.dispatch(viewGlobal('UPDATE_FOOT',false));
        }

        if (/user/.test(path)){
            nextProps.dispatch(viewGlobal('UPDATE_NAV',false));
            nextProps.dispatch(viewGlobal('UPDATE_FOOT',true));
        }

        return null;
    }


    render(){
        let {bNav,bFoot,bLoading} = this.props;
        return (
            <div className="default">
                {bLoading && <Loading/> }
                {bNav && <Header/>}
                <Switch>
                    <Auth path="/home" component={Home}/>
                    <Auth path="/cart" component={Cart}/>
                    <Auth path="/column" component={Column}/>
                    <Auth path="/friend" component={Friend}/>
                    <Auth path="/user" component={User}/>
                    <Route path="/Login" component={Login}/>
                    <Route path="/reg" component={Reg}/>
                    <Auth path="/detail2/:_id" component={Detail2}/>
                    <Auth path="/detail/:_id" component={Detail}/>
                    <Redirect exact from="/" to="/home" />
                    <Route component={NoPage}/>
                </Switch>
                {bFoot?<Footer/>:null}
            </div>
        )
    }
}

export default connect(
    state=>({bNav:state.bNav,bFoot:state.bFoot,bLoading:state.bLoading})
)(App)