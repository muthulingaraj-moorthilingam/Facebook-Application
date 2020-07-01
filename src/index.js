import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



	class Garage extends React.Component{
	render(){
		return(

		<div className="div-block-story">
			<a href={this.props.url} className ="story-block-a">
			<div className="story-block-a-div">
			<div className ="plus-story">
				<div className="outter-plus">
					<div className="img-bg">
					<img  src={this.props.src} alt={this.props.alt} style={{filter:"invert(1)"}}/>
					</div>
				</div>
				{this.props.content}
			</div>
			</div>
			</a>

		</div>
		);
	}
}


ReactDOM.render(
  <div className="flex">
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />
  </div>,
  document.getElementById('root')
);
