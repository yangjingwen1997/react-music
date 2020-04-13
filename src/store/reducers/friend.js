let initState=[];   //friends

//reducer要求是个纯函数: 不修改其输入，输出可控，必须要有返回值

const friend = (state=initState, action) => {// state == rootState == {count}
    // console.log('reducer',action);//store.dispatch(action)
    let {type, payload} = action;

    switch (type) {
        case "UPDATE_FRIEND":
            //..处理同步业务
            return payload;//copy + 更新 + 返回
        case "CLEAR_FRIEND":
            //..处理业务
            return [];
        default:
            return state;
    }

};

export default friend;