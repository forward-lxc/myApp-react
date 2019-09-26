import React, { Component } from 'react';
import "./lodingPage.scss";
// import LandPageComponent from "./components/landPage.js";


class LodingPageComponent extends Component {

  constructor(props){
  	super(props);
  	this.state={
      loginTrueAndFalse:"none",//根据登录状态进行过组件显示隐藏的判断
  		documentWidth: document.documentElement.clientWidth || document.body.clientWidth,
  		documentHeight: document.documentElement.clientHeight || document.body.clientHeight ,
  		lodingpageWarpWidth:'100%', //.lodingpage_warp  宽度定义
  		arrData:['W','E','L','C','O','M','E'],
  	}
  }
  componentWillMount(){    
    this.setState({ loginTrueAndFalse:sessionStorage.getItem("login")==="true"?"none":"block" })//如果已经登录 ---  不显示一进页面的动画组件
  	window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
  }
  componentWillUnmount() {       
    window.removeEventListener('resize', this.handleResize.bind(this))//组件挂掉之后接触事件绑定
  }
  handleResize(e){
    // console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    this.setState({ 
    	documentWidth : e.target.innerWidth ,
    	documentHeight: document.documentElement.clientHeight || document.body.clientHeight ,
    })
  }
  btn_clickfunction(){//点击“————>”进行登录 , 并改变session的状态
    sessionStorage.setItem("login","true")
  	this.setState({ lodingpageWarpWidth:0 })
  }

  render() {
  	//根据不同屏幕进行文字 || 宽度 进行适配
	let documentWidth=this.state.documentWidth;
	let spanWidth=documentWidth<=375?24 : documentWidth<=768?40 : 80 ;

	return (
      <div className="lodingpage_warp" style={{height:this.state.documentHeight,width:this.state.lodingpageWarpWidth,display:this.state.loginTrueAndFalse}} >
      	<div className="text_warp" style={{width:this.state.arrData.length*spanWidth+'px'}}>
	       	{
	       		this.state.arrData.map((item,index)=>{
	       			return(
	       				<span key={index} style={{left:spanWidth*index+'px',animationDelay:0.2*index+'s'}}>{item}</span>
	       			)
	       		})
	       	}
       	</div>
       	<div className="btn_warp" onClick={this.btn_clickfunction.bind(this)}>
       		<div className="btn_right_border"></div>
       		<div className="btn_top_border"></div>
       		<div className="btn_bottom_border"></div>
       		<div className="btn_left_border"></div>
       		<div className="btn_jianTou"> > </div>
       		<div className="btn_jianTou_border"></div>
       	</div>	
      </div>
    )
  }
}

export default LodingPageComponent;