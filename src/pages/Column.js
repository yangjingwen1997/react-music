import React,{Component} from 'react';
import styles from '../assets/css/column.module.css'
import Music from "../components/music/music";
import tu1 from '../assets/img/title.jpg'
import tu2 from '../assets/img/play.png'
import {connect} from 'react-redux';
import {clear,updateList} from "../store/actionCreators";

class Column extends Component{
  componentDidMount() {
      this.props.dispatch(clear('CLEAR_COLUMN'));
      this.props.dispatch(
          updateList({collectionName: 'column', params: {_page: 1, _limit: 10}, type: 'UPDATE_COLUMN'})
      )
  }
    render(){
        let {column}=this.props;
        return (
            <div className={styles.Column}>
                    <img src={tu1} width="100%"/>
                        <div className={styles.play}>
                            <img src={tu2}/>
                            <i>播放全部</i>
                        </div>

                        <div className={styles.title}>
                            <div className={styles.wp}>歌曲标题</div>
                            <div className={styles.wp}>时长</div>
                            <div className={styles.wp}>歌手</div>
                        </div>

                        {
                    column.map((item,index)=>(
                        <Music
                            key={item._id}
                            index={index}
                            data={item}
                            to={{pathname:'/detail2',apiname:'column'}}
                        />
                    ))
                }
            </div>
        )
    }
}
export default connect(
    state=>({column:state.column})
)(Column)