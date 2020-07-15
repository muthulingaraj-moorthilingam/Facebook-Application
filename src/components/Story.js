import React from 'react';

class Story extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	on = () =>{
		var ip=document.getElementById('ip');
		var value = ip.value;
		this.props.childToparent(value)
	}
	render(){
		return(
			<div>
				<div  onClick={this.on}>
					<Cross />
				</div>
				<div style ={{paddingTop:"80px"}}>
					<input type="text" id="ip" />
					<button onClick={this.on}>{"Click"}</button>
				</div>
			</div>
		);
	}
}

export default Story;

export class Cross extends React.Component{
	render(){
		return(
			<div className="cross-icon">
			</div>
		);
	}
}