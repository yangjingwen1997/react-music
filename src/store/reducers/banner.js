let initState=[]     //banner 是个纯函数，输出可控，必须要有返回值
//reducer
const banner=(state=initState,action)=>{
    let {type,payload}=action;    //store.dispatch(action)

    switch (type) {
        case 'UPDATE_BANNER':
            return payload;   //校验payload是不是数组
        case 'CLEAR_BANNER':
            return [];
        default:
            return state;
    }
};
export default banner;