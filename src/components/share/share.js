import React, {Component} from 'react';
import styles from './share.module.css'
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom';


class Share extends Component{

    static defaultProps = {
        index: undefined,
        to: null
    };
    static propTypes = {
        index: propTypes.number,
        data: propTypes.shape({
            _id: propTypes.string,
            title: propTypes.string,
            des: propTypes.string,
            img:propTypes.string,
            icon:propTypes.string
        }).isRequired,
        to: propTypes.shape({
            pathname: propTypes.string,
            apiname: propTypes.string,
        })
    };
    to=(_id)=>{
        if (!this.props.to) return;
        let {history,to:{pathname,apiname}}=this.props;
        history.push({pathname:`${pathname}/${_id}`,search:`apiname=${apiname}`})
    };


    render(){
        let {data,children,index}=this.props;
        return (
        <div className={styles.friend} onClick={()=>this.to(data._id)}>
            {/*{children}*/}
            {index + 1 ? <span>{index + 1 + '. '}</span> : null}

            <img src={this.baseUrl2+data.detail.auth_icon} className={styles.icon}/>
            <span>{data.detail.auth}✿</span>
            <span className={styles.track}>Share Track:</span>
            <div className={styles.con}>
                <img src={this.baseUrl2+data.img} className={styles.img}/>
                <p style={{color:'#333',fontSize:' 0.3rem'}}>{data.des}</p>
            </div>
            <div className={styles.zan}>
                <i><img src="/images/zan.png" alt=""/></i>
                <i><img src="/images/aixin.png" alt=""/></i>
                <i><img src="/images//zhuan.png" alt=""/></i>
            </div>
        </div>
        )
    }
}
export default withRouter(Share)