import React from 'react';
import styles from './input.module.css'
import propTypes from 'prop-types';
export default class Input extends  React.Component{
    static defaultProps={
        type: 'text',
        model: null,
        multi: false,
        label: '',
        style: {}
    };
    //类型约定
    static propTypes = {
        type: propTypes.string,
        model: propTypes.shape({
            name: propTypes.string.isRequired,
            value: propTypes.string.isRequired,
            onChange: propTypes.func.isRequired
        }),
        multi: propTypes.bool,
        label: propTypes.string,
        style: propTypes.object
    };

    //标题纯渲染
    renderSpan=(label)=>{
        return label ?<span>{label}</span>:null
    }
    //单行输入
    renderInput=()=>{
        let {model,type,label,style}=this.props;
        let inputEle=null;
        //非受控元素
        if(!model){
            inputEle=(
                <div className={styles.wwinput} style={style}>
                    <input className={styles.ipt} type={type} defaultValue='' style={{paddingLeft:label?'1.24rem':'0.24rem'}}/>
                    {this.renderSpan()}
                </div>
            );
            return inputEle;
        }
    let {model:{name,value,onChange}}=this.props;
        //生成受控元素
        inputEle=(
            <div className={styles.wwinput} style={style}>
                <input  className={styles.ipt}  type={type} value={value} onChange={onChange} name={name}
                       style={{paddingLeft:label?'1.24rem':'0.24rem'}}/>
                {this.renderSpan(label)}
            </div>
            );
return inputEle;
};

    //多行输入框渲染

    renderTextarea=()=>{
        let {model,label}=this.props;
        let multiEle=null;

        if(!model){
            multiEle=(
                <div>
                    {this.renderSpan(label)}
                    <textarea></textarea>
                </div>
            )
            return multiEle;
        }
        let {model:{name,value,onChange}}=this.props;
        multiEle=(
            <div>
                {this.renderSpan(label)}
                <textarea value={value} name={name} onChange={onChange}></textarea>
            </div>
        )
        return multiEle;
    }
    render() {
        return this.props.multi?this.renderTextarea():this.renderInput();
    }
}