import React from 'react';
import {connect} from 'react-redux'

import {Route,Redirect} from 'react-router-dom'

//全局路由守卫， 条件是同步（依赖状态管理),
//...rest 剩余参数
// {...rest}  把路由上下文传给Route，不含component
//render里面的props参数 ~~ rest

const  Auth =({user:{err},component:Component,...rest})=> {
    return(
        <Route {...rest} render={props=>(
            err===0?<Component {...props}/>:<Redirect to='/login'/>
        )}/>
    )
}

export default connect(
    state=>({user:state.user})
)(Auth);