import React, { Component } from 'react';
import './App.css';
import { homeData } from "./api/lxc";
import LodingPageComponent from './page/lodingPage/lodingPage'; //引入登录组件
import MenuComponent from './component/common/Menu/Menu'; // 引入顶部菜单
import ContentComponent from './component/common/content/content';  //引入内容组件
import { Icon } from 'antd'; 
import './api/mock.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={  
      homeData:"",//定义首页数据源
      lodingShow:false
    }
  }
  componentWillMount(){
    //请求首页数据
    this.setState({ lodingShow : true })//显示loding
    homeData().then(res=>{
	  console.log(res)
      this.setState({ 
        homeData : res.data.data ,
        lodingShow : false
      })//赋值给homeData数据
    })
  }
  render(){
    return (
      <div className="App"> 
      <Icon type="setting" spin className="lodingstyle" style={{display:this.state.lodingShow?'block':'none'}}/>
        <div className="conainer">
        	<LodingPageComponent/>
          <div className="conainer_main">
            <MenuComponent navDataList={this.state.homeData.navData?this.state.homeData.navData:[]}/>
            <ContentComponent/>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
