import React,{Component} from 'react';
import Share from "../components/share/share";
import {connect} from "react-redux";
import {updateList,clear} from "../store/actionCreators";

class Friend extends Component{
 componentDidMount(){
        // let res = React.axios({url:'/api/goods/friends',params:{_page:1,_limit:10}})
        // this.setState({friend:res.data.data})
     this.props.dispatch(clear('CLEAR_FRIEND'))
     this.props.dispatch(
         updateList({collectionName:'friend',type:'UPDATE_FRIEND',params:{_limit:8}})
     )
    }

    render(){
        let {friend}=this.props;
        console.log(this.props)
        console.log(friend)
        return (
            <div className="friend">
                             {
                    friend.map(item => (
                        <Share
                            key={item._id}
                            data={item}
                            to={{pathname:'/detail',apiname:'friend'}}
                        >
                        </Share>
                    ))
                }

            </div>
        )
    }
}
export default connect(
    state=>({friend:state.friend})
)(Friend)