import React,{Component} from 'react';
import '../assets/css/reg.css'
import Nav from "../components/ww-nav/nav";
import Button from "../components/ww-button/button";
import {Link} from "react-router-dom";
import Input from "../components/ww-input/input";
import store from '../plugins/redux'
import {checkUser} from "../store/actionCreators";


export default class Reg extends Component{
    state={
        username:'',
        password:'',
        errorMess:''
    };
    changeIpt=(ev)=>{
        this.setState({
            [ev.target.name]:ev.target.value
        })
    };

    reg=()=>{

        let {username,password}=this.state;
        // let formData=new FormData();  //js类型
        // formData.append('username',username)
        // formData.append('password',password)
        //
        // if(this.file.files.length>0){
        //     formData.append('icon',this.file.files[0])
        // }
        //
        // let res=axios({
        //     url:'/api/reg',
        //     method:'post',
        //     data:formData
        // })
        //
        // if(res.data.err===0){
        //     alert(res.data.msg)
        //     this.props.history.push('/login')
        // }else{
        //     this.setState({errorMess:res.data.msg})
        // }
        store.dispatch(
            checkUser({collection:'reg',username,password,icon:this.file.files[0]})
        ).then(
            res=>{
                if(res.data.err===0){
                    store.dispatch({type:'UPDATE_USER',payload:{err:1}})
                }else{
                    this.setState({errorMess:res.data.msg})
                }
            }
        )
    };

  render(){
      let {username,password,errorMess} = this.state;
      return (
        <div className="content">
          <Nav arrow="gray" borderWidth={0} bgColor="transparent" />
          <h1 onClick={()=>this.file.click()}></h1>
          <input type='file' ref={el=>this.file=el} style={{visibility: "hidden"}}/>
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
            <Input label='用户' model={{name:'username',value:this.state.username,onChange:this.changeIpt}}/>
            <Input label='密码' type='password' model={{name:'password',value:this.state.password,onChange:this.changeIpt}}/>
            <span style={{color:'red'}}>{this.state.errorMess}</span>
          </ul>
          <div className="footbox">
            <Button style={{marginTop:'0.64rem'}} clickHandler={this.reg}>注册</Button>
            <a className="tishi">忘记密码？</a>
          </div>

        </div>
    )
  }
}