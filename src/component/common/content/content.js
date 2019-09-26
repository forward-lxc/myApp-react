import React, { Component } from 'react';
import "./content.scss";
import { Carousel } from 'antd';

class ContentComponent extends Component {
  constructor(props){
  	super(props);
  	this.state={
  		
  	}
  }
  carouselOnChange(a, b, c) {
	console.log(a, b, c);
  }
  render() {
    return (
      <h1 className="mainConainer">
      	<Carousel afterChange={this.onChange}>
		    <div>
		      <h3>1</h3>
		    </div>
		    <div>
		      <h3>2</h3>
		    </div>
		    <div>
		      <h3>3</h3>
		    </div>
		    <div>
		      <h3>4</h3>
		    </div>
		 </Carousel>
      </h1>
    )
  }
}


export default ContentComponent;