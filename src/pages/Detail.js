import React,{Component} from 'react';
import '../assets/css/detail.css';
import Nav from "../components/ww-nav/nav";
//图片引入，模块化使用
import qs from 'query-string'
import BareScreen from "../components/BareScreen";
import {date} from "../utils/filters";
import {Tools} from "../components/ww-tool/tool";
import {connect} from 'react-redux'
import {clear, updateDetail} from '../store/actionCreators'

class Detail extends Component{

    constructor(props){
        super(props);

        let apiname = qs.parse(props.location.search).apiname;
        let _id = props.match.params._id;

        props.dispatch(clear('CLEAR_DETAIL'));
        props.dispatch(
            updateDetail({collectionName:apiname, _id})
        )
        // this.axios({url:`/api/goods/${apiname}/${_id}`}).then(
        //     res=>this.setState({data:res.data.data})
        // )
    }

    renderPage=({title,time,detail:{auth,auth_icon,content}})=>(
        <div className="main">
            <Nav/>
            <div className="content">
                <div className="header clear"><h2><img width="50" src={`${this.baseUrl2}/${auth_icon}`} alt=""/></h2><p>{auth}</p></div>
                <div className="cont">
                    <h3>{title}</h3>
                    <div className="time"><p>{date(time)}<span>&nbsp;</span></p>
                    </div>
                    <iframe frameBorder="no" border="0" marginWidth="0" marginHeight="0" width='100%' height='100'
                            src="//music.163.com/outchain/player?type=3&id=2066040073&auto=0&height=66"></iframe>
                    <div className="text-box" dangerouslySetInnerHTML={{__html:content}}></div>
                </div>
            </div>
           <Tools/>
        </div>
    );
    renderBareScreen=()=>(<BareScreen/>);

    render(){
        let {data}=this.props;
        console.log(data)
        console.log(this.props)
        let el=null;

        if (data.title) {
            el = this.renderPage(data)
        }else{
            el = this.renderBareScreen()
        }



        return el;
    }
}
export default connect(
    state=>({data:state.detail})
)(Detail)