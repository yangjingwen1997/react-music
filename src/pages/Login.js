import React,{Component} from 'react';
import '../assets/css/login.css'
import Nav from "../components/ww-nav/nav";
import Button from "../components/ww-button/button";
import Input from "../components/ww-input/input";

import {Link} from 'react-router-dom'
import qs from 'qs';
import {connect} from 'react-redux'
import {checkUser} from "../store/actionCreators";
import store from "../plugins/redux";


class Login extends Component{
  state={
    username:'',
    password:'',
    errorMess:''
  };

  login=()=>{
  this.props.dispatch(
      checkUser({collection:'login',username:this.state.username,password:this.state.password})
  ).then(
      res=>{
        if(res.data.err===0){
          this.props.history.push('/home')
        }else{
          this.setState({errorMess:res.data.msg})
        }
      }
  )
  //   let params=new URLSearchParams();     //携带的类型
  //   params.append('username',this.state.username);
  //   params.append('password',this.state.password);
  //
  //   let res=this.axios({      //提交回来的结果
  //     url:'/api/login',
  //     method:'post',
  //     data:params
  //   });
  //   if (res.data.err===0){
  //     //更新同步localStrage 成功===0
  //     window.localStorage.setItem("user",qs.stringify(res.data));  //转为json字符串
  //     //跳转到之前
  //
  //     let path = qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path;   //解析？  true
  //
  //     if (path && !path.includes('/login')){
  //       this.props.history.push({
  //         pathname:qs.parse(this.props.location.search,{ignoreQueryPrefix:true}).path
  //       })
  //     } else {
  //       this.props.history.push('/user')
  //     }
  //
  //   } else {
  //   this.setState({errorMess:res.data.msg})
  // }
  };

changeIpt=(ev)=>{
  this.setState({
    [ev.target.name]:ev.target.value
  })
}
  render(){
  let {username,password,errorMess}=this.state;
    return (
        <div className="content">
        <Nav arrow="gray" borderWidth={0} bgColor="transparent" />
          <h1></h1>
          <div className="login-box">
            <p className="lsolid"></p>
            <div className="login">
              <Link to="/login">登录</Link>
              {/*<a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:1}})}>登录</a>*/}
              <span></span>
              <Link to="/reg">注册</Link>
              {/*<a onClick={()=>store.dispatch({type:'UPDATE_USER',payload:{err:3}})}>注册</a>*/}
            </div>
            <p className="rsolid"></p>
          </div>
          <ul>
            <Input label='用户' model={{name:'username',value:username,onChange:this.changeIpt}}/>
            <Input label='密码' type="password" model={{name:'password',value:password,onChange:this.changeIpt}}/>
           <br/>
           <span style={{color:'red'}}>{errorMess}</span>
          </ul>
          <div className="footbox">
            <Button style={{marginTop:'0.64rem'}} clickHandler={this.login}>登录</Button>
            <a className="tishi">忘记密码？</a>
          </div>

        </div>
    )
  }
}
export default connect()(Login)