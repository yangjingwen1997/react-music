import React,{Component} from 'react';
import styles from './cart.module.css';
import propTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

class Cart extends Component{
static defaultProps={
    index:undefined,
    to:null
}
    static propTypes={
        index: propTypes.number,
        data: propTypes.shape({
            img: propTypes.string,
            des: propTypes.string,
            price:propTypes.number,
            p:propTypes.number,
        }).isRequired,

    };

    render() {
        let {data}=this.props;
        return(
            <div className={styles.shop}>
                <img src={this.baseUrl2+data.img} width="48%"/>
                <div className={styles.button}>
                    <p className={styles.des}>{data.des}</p>
                    <span className={styles.span}>￥{data.price} &nbsp;&nbsp; <i className={styles.i} > ￥{data.p}</i></span>
                </div>

            </div>
        )

    }
}
export default withRouter(Cart)