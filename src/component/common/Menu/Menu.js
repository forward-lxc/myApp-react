import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import "./Menu.scss";
import { Drawer , Icon} from 'antd';

class MenuComponent extends Component {
  constructor(props){
  	super(props);
  	this.state={
      needindex:0,
      bottomBorder_left:0,
      bottomBorder_width:0, 
	  visible: false, 
	  placement: 'top',//定义选择框方位 
  	}
  }
  componentDidMount(){ 
    console.log( Route)
  }
  goRouter(path,index){  //路由跳转  
    this.setState({
      needindex:index,
    }) 
  }
  showDrawer = () => { //显示弹出框 menu
    this.setState({
      visible: true,
    });
  };
  onClose = () => { //关闭弹出框 menu
	this.setState({
	  visible: false,
	});
  };
  render() {    
    return (
      <div className="navConainer">
		    <div className="navConainer_sub">
				<div className="leftDiv_p">
					<div className="leftDiv"></div>
					<span>刘学超***</span>
				</div>
				<ul ref="munLiUl">
				  { 
					this.props.navDataList.map((item,index)=>{
					 return(
						<li key={index} onClick={this.goRouter.bind(this,item.path,index)}>
							<dl>
							  <dt style={{fontSize:this.state.needindex===index?'18px':'14px'}}>{item.title}</dt>
							</dl>
							<div className="bottomBorder" style={{height:this.state.needindex===index?3+'px':0}}></div>
						</li>
					  )
					})
				  }
				</ul>
				<div className="menu_top_icon">
					<Icon type="appstore" onClick={this.showDrawer}/>
					<Drawer
					  // title="Basic Drawer"
					  placement={this.state.placement}
					  closable={true}
					  onClose={this.onClose}
					  visible={this.state.visible}
					>
					  {
						this.props.navDataList.map((item,index)=>{
						 return(
							<p>{item.title}</p>
						  )
						})
					  }
					</Drawer>
				</div>
			</div>
      </div>
    )
  }
}
 /*<dd style={{fontSize:this.state.needindex===index?'14px':'12px'}}>{item.translate}</dd>*/
export default MenuComponent;