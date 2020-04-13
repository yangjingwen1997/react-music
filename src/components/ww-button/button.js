import React from 'react';
import propTypes from 'prop-types';
import './style.module.css'
import styles from './style.module.css'

export default class Button extends React.Component{
    static defaultProps={
        clickHandler:()=>{},
        size:'default',    //style->.login-button--default | login-button--mini
        style:{}
    };
    static propTypes={
        clickHandler: propTypes.func,
        type: propTypes.string,      // mini
        style: propTypes.object,
    };

    render() {
        let {clickHandler,children,size,style}=this.props;

        return (
            <button
                type="button"
                className={styles['login-button'] + ' ' + styles[`login-button--${size}`]}
                style={style}
                onClick={(ev)=>clickHandler(ev)}
            >{children ? children : '按钮'}</button>
        )
    }
}