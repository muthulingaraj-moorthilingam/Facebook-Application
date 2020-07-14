import React from 'react';
//import ReactDoM from 'react-dom';
//import { Right } from './Right.js';
import '../story.css';
export class Left extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			story_data:null 
		};
	}


	showTextstory(event){
		console.log(this.state);
		renderCopmponent();
		//ReactDOM.render(<Story data={this.state}/>,document.getElementById("story-box-ip"));
	}

	onChange = (event) =>{
		console.log(event.target.value);
		this.setState({story_data:event.target.value});
		console.log(this.state)
	}

	render(){
		const bg_img ={
   			margin: "8px 12px 8px 0px",
    		width: "60px",
    		height: "60px",
    		backgroundPosition: "center",
    		backgroundRepeat: "no-repeat",
    		backgroundSize: "54px",
    		borderRadius:"50%"
		};
		return(
			<div style={{display:"flex"}}>
				<div style={{backgroundColor:"#fff"}} className="box-sh" id="box-story" >
				<div className="left-side-create">
					<div className="head-story">
						<a href={this.props.attribute.href} className="sto-apan" >{this.props.attribute.content}</a>
							<h1 className="head-1">{this.props.attribute.headding}</h1>
						<div className="setting-img"></div>
					</div>
				</div>
				<div className="user-details-left-side">
					<div className="pad-user-left">
						<div className="outer-left-side">
							<div className="user-pic-left" style={bg_img}></div>
							<div className="user-name-left">{"User name"}</div>
						</div>
					</div>
				</div>
				<hr style={{margin:"20px 0px 0px 0px"}} />
				<div id="story-box-ip" className="hide">
					{/*<Story data={this.state} />*/}
					<div className="parent-sto-div-container">
				<div className="inner-sto-div">
					<div className="border-div-sto">
						<textarea className="textarea" placeholder="Start typing" onChange={this.onChange}>
						</textarea>
						<span id="sp-text">Text{this.state.value}</span>
						
					</div>
					<div className="font-family">
					<div className="now"></div>
						<Ul />
					</div>
				</div>
			</div>
				</div>
			</div>


				<div style={{width:"100%"}} className="parent-SAP">
			<div className="story-binding">
				<Post data={this.state} />
			</div>
				<div id="hide_st">
					<div>
						<div>
							<div className="create-story-type">
								<div className="add-SPS add-Photo">
									<div className="position">
										<div className="add-poto-story photo"></div>
											<div className="add-poto-story-name">
											{"Add photo"}
										</div>
									</div>
								</div>
								<div className="add-SPS add-Story" onClick={this.showTextstory.bind(this)}>
									<div className="position">
										<div className="add-poto-story story">
											<div className="bg"></div>
										</div>
										<div className="add-poto-story-name">
										{"Add Text story"}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			</div>
		);
	}
}
export class Ul extends React.Component{
	constructor(){
		super();
		this.state={
			font:[
				{	
					name:"CLEAN",
					style:{
						fontFamily:'Abel',
						fontSize:'15px',
						fontWeight:'700'
					}
				},
				{
					name:"Simple",
					style:{
						fontFamily:'Aladin',
						fontSize:'15px'
					}
				},
				{
					name:"Casual",
					style:{
						fontFamily:'Alfa Slab One',
						fontSize:'15px'
					}
				},
				{
					name:"Fancy",
					style:{
						fontFamily:'Audiowide',
						fontSize:'15px'
					}
				}
			]
		};
	}
	render(){
		return(
			<ul className="font-family-ul">
				<li className="font-family-li" style={this.state.font[0].style}>
					{this.state.font[0].name}
				</li>
				<li className="font-family-li" style={this.state.font[1].style}>
					{this.state.font[1].name}
				</li>
				<li className="font-family-li" style={this.state.font[2].style}>
					{this.state.font[2].name}
				</li>
				<li className="font-family-li" style={this.state.font[3].style}>
					{this.state.font[3].name}
				</li>
			</ul>
		);
	}
}


/*export class Story extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			value:null
		}
	}
	onChange = (event) =>{
		console.log(event.target.value);
		this.setState({value:event.target.value});
		console.log(this.state)
	}
	render(){
		return(
			<div className="parent-sto-div-container">
				<div className="inner-sto-div">
					<div className="border-div-sto">
						<textarea className="textarea" placeholder="Start typing" onChange={this.onChange}>
						</textarea>
						<span id="sp-text">Text{this.state.value}</span>
						
					</div>
				</div>
			</div>
		);
	}
}
*/
export class Post extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			input:null
		}
		console.log(this.props.data.story_data)
	}


	render(){
		return(
		<div className ="post-block-hide style-post" id="show-post">
			<div className="pad-post-div">
				<div className="heading-div">
					<div className="heading-in-div">{"Preview"}</div>
				</div>
				<div className="inner-post-div">
					<div className="inner-block-post">
						<div className="frame-part">
							<img src="" alt="" />
							<div className="bind-text">
							{this.props.data.story_data}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}


function renderCopmponent(){

	var st_Path = document.getElementById("hide_st");
	var text_Area = document.getElementById("story-box-ip");
	var st_binding_post = document.getElementById("show-post");

	if(text_Area.classList.contains("hide")){
		text_Area.classList.remove("hide");
		text_Area.classList.add("show");
	}
	if(st_Path.classList.contains("hide") || !(st_Path.classList.contains("show"))){
		st_Path.classList.add("hide");
	}
	if(st_binding_post.classList.contains("post-block-hide")){
		st_binding_post.classList.remove("post-block-hide");
		st_binding_post.classList.add("post-block-show");
	}
}