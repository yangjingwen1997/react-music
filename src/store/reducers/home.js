let initState=[];  //home

const home = (state=initState, action) => {// state == rootState == {count}
    // console.log('reducer',action);//store.dispatch(action)
    let {type, payload} = action;

    switch (type) {
        case 'UPDATE_HOME':
            // 校验payload 是不是数组
            return payload;
        case 'CLEAR_HOME':
            return [];
        default:
            return state;
    }

};

export default home;