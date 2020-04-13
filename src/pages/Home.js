import React from 'react';
import Banner from "../components/ww-swiper/swiper";
import Cell from "../components/ww-cell/cell";
import Button from "../components/ww-button/button";
import {NavLink} from 'react-router-dom';
import styles from '../assets/css/home.module.css'
import Tuij from "../components/tuijian/Tuij";
import {updateList} from "../store/actionCreators";
import {connect} from "react-redux";
import {clear} from "../store/actionCreators";

// import axios from 'axios'      //可以不引入 绑到代理的 window.axios
class Home extends React.Component{

    componentDidMount() {
        //读取数据
        // React.axios.all([
        //     React.axios({url:'/api/goods/banner',params:{_page:1,_limit:8}}),
        //     React.axios({url:'/api/goods/home',params:{_page:1,_limit:10}})
        // ]).then(React.axios.spread((banner, home)=>{//banner|home ~~ res
        //    console.log(banner.data.data)
        //     banner.data.data.map(item => item.banner=this.baseUrl + '/' + item.banner );
        //     this.setState({
        //         banner:banner.data.data,
        //         home:home.data.data
        //     })
        // }));
        this.props.dispatch(clear('CLEAR_HOME'));
        this.props.dispatch(clear('CLEAR_BANNER'));
        this.props.dispatch(
            updateList({collectionName:'home',params:{_page:1,_limit:8},type:'UPDATE_HOME'})
        );
        this.props.dispatch(
            updateList({collectionName:'banner',params:{_page:1,_limit:5},type:'UPDATE_BANNER'})
        )
    }

    show(){
        alert('成功添加到我的音乐')
    }
  render(){
      let {banner,home}=this.props;
    return (

      <div className={styles.Home}>
          <Banner
              data={banner}
              to={{pathname:'/detail',apiname:'banner'}}
          />

          <div className={styles.fm}>
              <NavLink
                  to="/column"
                  className={styles.cir}
              >
                  <img src='/images/icon-1.png'/>
                      <span className={styles.word}>私人</span>
              </NavLink>
              <NavLink
                  to="/friend"
                  className={styles.cir}
              >
                  <img src="/images/icon-2.png"/>
                  <span className={styles.word}>推荐</span>
              </NavLink>
              <NavLink
                  to="/cart"
                  className={styles.cir}
              >
                  <img src="/images/icon-3.png"/>
                  <span className={styles.word}>歌单</span>
              </NavLink >

          <NavLink
              to="/cart"
              className={styles.cir}
          >
              <img src="/images/paihangbang.png"/>
              <span className={styles.word}>排行</span>
          </NavLink>


      </div>

      <p className={styles.tuij}>推荐歌单 ></p>
            <Tuij/>
          {
              home.map((item,index)=>(
                  <Cell
                      key={item._id}
                      index={index}
                      data={item}
                      to={{pathname:'/detail',apiname:'home'}}
                  >
                      <Button style={{float:"right"}} size="mini" clickHandler={this.show}>+</Button>
                  </Cell>
              ))
          }


      </div>
    )
  }
}
export default connect(
    state=>({home:state.home,banner:state.banner})
)(Home)