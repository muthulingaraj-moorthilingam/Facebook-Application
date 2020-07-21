import React from 'react';
import ReactDOM from 'react-dom';
//import Createstory from "./Createstory";
import Left from "./components/Left";
import Feed from "./components/Feed";
import Story from "./components/Story";
import './index.css';


class Garage extends React.Component{
	constructor(){
		super();
		this.state={
			story:[],
			defaultText:"Create story",
			defaultStyle:null,
			defaultImg:null,
			showStory : true,
			hideFeed: true,
			createStory:false,
			hide:"flex",
			uimg:"/Images/FB-D-u1.png",
			open:null,
			story_Done:null,
			items:[],
			default:{},
			tempItems:[]
		}
	}
	childToparent = () =>{
		
		this.setState({
			showStory : !this.state.showStory,
			hideFeed : !this.state.hideFeed,
			hide: this.state.hide === "flex" ? "none" : "flex",
			createStory: !this.state.createStory,
			default:{	
					name:"CLEAN",
					style:{
						fontFamily:'Abel',
						fontSize:'15px',
						fontWeight:'700'
					}
				},
			
		});
		console.log(this.state.items)
		hideElement();
	}
	/*storyTofeed =(value,style,img)=>{
		this.setState({
			open: !this.state.open,
		});
		this.childToparent(value,style,img);
	}*/
	upDateapi =(val,style,img) =>{

		this.setState({
			tempItems:this.state.items.slice(1),
			defaultText:val,
			defaultStyle:style,
			defaultImg:img,
			story_Done:!this.state.story_Done
		});
		this.childToparent();
	}
	componentDidMount(){
		fetch("https://testapi.io/api/Muthuraj/facebook/user/stories")
			.then(res => res.json())
			.then( (data) =>{
				this.setState({
					items:data,
					tempItems:data
				});
				//console.log(this.state.items);
		});
	}
	render(){

		return(
			<section className="center-part-main-page" >
				<div id="react-part-main-app" className="react-part-main-app" style={{display:this.state.hide}}>
					{
						this.state.showStory 

								&& 

						<div id="left-side-main-page" >
							<Left />
						</div>
					}
					{
						this.state.hideFeed
								&&
						<div id="center-main-page-app">
           				<div className="inner-center">
              				<section id="story-part">
                				<div className="story-div-part">
                  					<div className="story-block">
                    					<div id="root">
                    						<Feed childToparent={this.childToparent} text={this.state.defaultText} style={this.state.defaultStyle} open={this.state.open} img={this.state.defaultImg} storyDone={this.state.story_Done} dataApi={this.state.tempItems} />
                    					</div>
                  					</div>
                				</div>
              				</section>
            			</div>
          			</div>
					}
          			<div id="right-side-main-page"></div>
				</div>
				<div className="create-user-story">
					<div id="createe-user-story-root">
						{
							this.state.createStory 
									&& 

								<Story upDateapi={this.upDateapi} storyTofeed={this.storyTofeed} img={this.state.uimg} default={this.state.default} defaulyStyle={this.state.defaulyStyle} childToparent={this.childToparent} />
						}
					</div>
				</div>
			</section>
		);
	}
}

ReactDOM.render(
  	<Garage url="#" alt="" src="/Images/FB-plus.png" content="Create a story" />,
  document.getElementById('main-page')
);

export default Garage;



function hideElement(){
	var main_page = document.getElementById("main-page");
	var parent = document.getElementById("parent")
	var nav_Bar = document.getElementById("nav-center");
	var user_Left_side = document.getElementById("left-side-user");
	var  messenger_Icon = document.getElementById("messenger-icon");
	var search_Bar = document.getElementById("search-box");
	var logo = document.getElementById("logo");
	var right_logo = document.getElementById("right-logo");

	if(!right_logo.classList.contains("r-hide")){
		right_logo.classList.add("r-hide");
	}
	else if(right_logo.classList.contains("r-hide")){
		right_logo.classList.remove("r-hide");
	}

	if(!logo.classList.contains("logo-1")){
		logo.classList.add("logo-1");
	}
	else if(logo.classList.contains("logo-1")){
		logo.classList.remove("logo-1");
	}

	if(!main_page.classList.contains("pad-top")){
		main_page.classList.add("pad-top");
	}
	else if(main_page.classList.contains("pad-top")){
		main_page.classList.remove("pad-top");
	}

	if(!parent.classList.contains("parent-story")){
		parent.classList.add("parent-story");
	}
	else if(parent.classList.contains("parent-story")){
		parent.classList.remove("parent-story")
	}

	if(!search_Bar.classList.contains("hide") ){
		search_Bar.classList.add("hide");
	}
	else{
		search_Bar.classList.remove("hide");
		search_Bar.classList.add("show");
	}

	if(nav_Bar.classList.contains("show-flex")){
		nav_Bar.classList.remove("show-flex");
		nav_Bar.classList.add("hide-flex");
	}
	else if(nav_Bar.classList.contains("hide-flex")){
		nav_Bar.classList.remove("hide-flex");
		nav_Bar.classList.add("show-flex");
	}
	if(!messenger_Icon.classList.contains("hide")){
		messenger_Icon.classList.add("hide");
	}
	else if(messenger_Icon.classList.contains("hide")){
		messenger_Icon.classList.remove("hide");
	}
	user_Left_side.classList.add("hide");
	
}





























/*
	var cross_Icon = document.getElementById("cross-arrow");
	var left_section = document.getElementById("hide_left_side");
	var root = document.getElementById("root-create");
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
	if(left_section.classList.contains("show")){
		left_section.classList.remove("show");
		left_section.classList.add("hide");
	}
	if(cross_Icon.classList.contains("hide")){
		cross_Icon.classList.remove("hide");
		cross_Icon.classList.add("show");
	}*/

/*
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

*/
