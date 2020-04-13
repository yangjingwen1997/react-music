let initState=[];   //cart

//reducer要求是个纯函数: 不修改其输入，输出可控，必须要有返回值

const cart = (state=initState, action) => {// state == rootState == {count}
    console.log('reducer',action);//store.dispatch(action)
    let {type, payload} = action;

    switch (type) {
        case "UPDATE_CART":
            //..处理同步业务
            return payload;
        case "CLEAR_CART":
            return [];
        default:
            return state;
    }

};

export default cart;