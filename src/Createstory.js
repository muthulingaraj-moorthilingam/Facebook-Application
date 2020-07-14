import React from 'react';
import './story.css';

import { Left } from './story-component/Left.js';
//import { Right } from './story-component/Right.js';

class Createstory extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text:null,
			bgImg:null,
			font:null,
			cross:null
		};
	}
	render(){
		const attributes ={ src:"../public/Images/FB-D-u1.png",href:"#",content:"Stories",headding:"Your story"};
		return(
			<div className="parentStory">
				{/*<Cross />
				//<Left attribute={attributes} />
				//<Right />*/}
				<Cross hide={this.state} />
				<Left data={this.state} attribute={attributes} />
				
			</div>	
		);
	}
}

export default Createstory;

export class Cross extends React.Component{
	constructor(props){
		super(props);
		this.state={
			show:null
		}
	}
	hide_Show(){
		hide_show_fun();
	}

	render(){
		return(
			<div className="p-c">
				<div className="cross-st-hide" onClick = {this.hide_Show.bind(this)} id="cross-id" >
				</div>
				{/*<div className="dis-card">
					<div className="ret">
						<div className ="head">
							{"Discard photo?"}
						</div>
						<div className="dis-cross">
						</div>
						<hr />
					</div>
					<div className="p-content">
						<div className="content">
							{"Are you sure that you want to discard this photo? Your photo will not be saved."}
						</div>
					</div>
					<div className="btn-par">
						<button className="b-dis">{"Continue"}</button>
						<button className="b-dis">{"Discard"}</button>
					</div>
				</div>*/}
			</div>
		);
	}
}

function hide_show_fun(){
var root = document.getElementById("root-create");
var left_section = document.getElementById("hide_left_side");
var story_Part = document.getElementById("story-part");
var searchBox =document.getElementById("search-box");
var parentDiv = document.getElementById("parent");
var user_Left_side = document.getElementById("left-side-user");
var  messenger_Icon = document.getElementById("messenger-icon");
var main_page = document.getElementById("main-page");
var navBar = document.getElementById("nav-center");
var right_logo =document.getElementById("right-logo");

	//console.log("yes"+event.target.className);

	var logo = document.getElementById("logo");

	if(right_logo.classList.contains("r-hide")){
		right_logo.classList.remove("r-hide");
	}

	if(logo.classList.contains("logo-1")){
		logo.classList.remove("logo-1");
	}

	if(main_page.classList.contains("pad-top")){
		main_page.classList.remove("pad-top");
	}

	if(navBar.classList.contains("hide-flex")){
		navBar.classList.remove("hide-flex");
		navBar.classList.add("show-flex")
	}
	if(root.classList.contains("show")){
		root.classList.remove("show");
		root.classList.add("hide");
	}
	if(left_section.classList.contains("hide")){
		left_section.classList.remove("hide");
		left_section.classList.add("show");
	}
	if(story_Part.classList.contains("hide-story")){
		story_Part.classList.remove("hide-story");
		story_Part.classList.add("show-story");
	}
	if(searchBox.classList.contains("hide")){
		searchBox.classList.remove("hide");
		//searchBox.classList.add("show");
	}
	if(parentDiv.classList.contains("parent-story")){
		parentDiv.classList.remove("parent-story");
	}
	if(messenger_Icon.classList.contains("hide")){
		messenger_Icon.classList.remove("hide");
		messenger_Icon.classList.add("show");
	}
	if(user_Left_side.classList.contains("hide")){
		user_Left_side.classList.remove("hide")
	}

}