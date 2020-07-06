import React from 'react';
import ReactDOM from 'react-dom';
import Createstory from "./Createstory";
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
				<Userstory1 url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory1 url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory1 url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Userstory1 url="#" alt="" src="/Images/FB-plus.png" content="Create a story" data={data} />
				<Arrow src="./Images/FB-RS-Arrow.png" alt="" />
			</div>
		);
	}
}

class Userstory1 extends React.Component{
	display =(event) =>{
		create_story_block();
	}
	render(){
		return(
			<div className="div-block-story">
			<a href={this.props.url} className ="story-block-a" onClick={(event) =>this.display(event)}>
			<div className="story-block-a-div" style={{}}>
			<div className ="plus-story">
				<div className="outter-plus user-outer-plue">
					<div className="img-bg other-user">
					</div>
				</div>
				{this.props.data.items.title}
			</div>
			</div>
			</a>
		</div>
		);
	}
}

class User extends React.Component{
	display =(event) =>{
		create_story_block();
	}
	render(){
		return(
			<div className="div-block-story">
			<a href={this.props.url} className ="story-block-a" onClick= {this.display.bind(this)}>
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
		create_story_block();
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

function create_story_block(){
	func_hide();
	func_show();
	hideElement();
}

function func_hide(){
	var story = document.getElementById("story-part");
	story.classList.add("hide-story");

	var left= document.getElementById("hide_left_side");
	left.classList.add("hide");

	var create_story = document.getElementById("create-story");
	create_story.classList.remove("hide");
	create_story.classList.add("show-create-srory");
}


function func_show(){
	ReactDOM.render(<Createstory />,document.getElementById("root-create"));
}


ReactDOM.render(
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />,
  document.getElementById('root')
);


function hideElement(){
	var parent = document.getElementById("parent")
	var cross_Icon = document.getElementById("cross-arrow");
	var nav_Bar = document.getElementById("nav-center");
	var user_Left_side = document.getElementById("left-side-user");
	var  messenger_Icon = document.getElementById("messenger-icon");
	var search_Bar = document.getElementById("search-box");
	var left_section = document.getElementById("hide_left_side");
	var root = document.getElementById("root-create");

	if(cross_Icon.classList.contains("hide")){
		cross_Icon.classList.remove("hide");
		cross_Icon.classList.add("show");
	}
	parent.classList.add("parent-story");
	search_Bar.classList.add("hide");
	nav_Bar.classList.add("hide");
	messenger_Icon.classList.add("hide");
	user_Left_side.classList.add("hide");

	if(left_section.classList.contains("show")){
		left_section.classList.remove("show");
		left_section.classList.add("hide");
	}
	if(messenger_Icon.classList.contains("show")){
		messenger_Icon.classList.remove("show");
		messenger_Icon.classList.add("hide");
	}
	if(!root.classList.contains("hide")){
		root.classList.add("show");
	}
	else{
		root.classList.remove("hide");
		root.classList.add("show");
	}
}