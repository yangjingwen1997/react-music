import React,{Component} from 'react';
import styles from './music.module.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

class Music extends Component{
   static defaultProps={
       index:undefined,
       to:null
   };
   static propTypes={
       index: propTypes.number,
       data: propTypes.shape({
           title: propTypes.string,
           time: propTypes.string,
           auth:propTypes.string
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
   render() {
       let {index,data,children} = this.props;
       return (
           <div className={styles.cell} onClick={()=>this.to(data._id)}>
               {children}

               <div> {index + 1 ? <span>{index + 1 + '. '}</span> : null}{data.title}</div>
               <div>{data.time}</div>
               <div>{data.auth}</div>
         </div>
       )
   }
}
export default withRouter(Music)