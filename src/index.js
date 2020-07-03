import React from 'react';
import ReactDOM from 'react-dom';
import { Userstory } from "./Userstory/Userstory";
import './index.css';



class Garage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			error:null,
			items:[]
		};
	}
	componentDidMount(){
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then(res => res.json())
			.then( (data) =>{
				this.setState({
					items:data
				});
				//console.log(this.state);
		})
	}

	render(){
		const data = this.state;
		return(
			<div className="parent">
				<User url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />
				<Userstory url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Arrow src="./Images/FB-RS-Arrow.png" alt="" />
			</div>
		);
	}
}

class User extends React.Component{
	display =(event) =>{
		alert(event.target.className);
	}
	render(){
		return(
			<div className="div-block-story">
			<a href={this.props.url} className ="story-block-a" onClick={(event) =>this.display(event)}>
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

class Arrow extends React.Component{
	hide(){
		const left= document.getElementById("left-side-main-page");
		left.style.display = "none";
		func_hide();
	}

	render(){
		return(
			<div className="parent-arrow" onClick={this.hide}>
				<img src={this.props.src} alt={this.props.alt} style={{margin:"15px 0px"}}/>
				<span className="title">See all stories</span>
			</div>
		);
	}
}

function func_hide(){
	const story = document.getElementById("story-part");
	story.classList.add("hide-story");

	const left= document.getElementById("left-side-main-page");
	left.style.display = "none";
}



ReactDOM.render(
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />,
  document.getElementById('root')
);
