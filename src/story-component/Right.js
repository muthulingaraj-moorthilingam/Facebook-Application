import React from 'react';
import ReactDOM from 'react-dom';
import '../story.css';
export class Right extends React.Component{

	constructor(){
		super();
		this.state = {
			vale:null
		};
	}

	showTextstory(event){
		console.log(this.state);
		renderCopmponent();
		ReactDOM.render(<Story data={this.state}/>,document.getElementById("story-box-ip"));
	}

	render(){
		return(
			<div style={{width:"100%"}} className="parent-SAP">
			<div className="story-binding">
				<Post />
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
		);
	}
}

export class Post extends React.Component{
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		);
	}
}

class Story extends React.Component{
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

function renderCopmponent(){
	var st_Path = document.getElementById("hide_st");
	var st_binding_post = document.getElementById("show-post");
	if(st_Path.classList.contains("hide") || !(st_Path.classList.contains("show"))){
		st_Path.classList.add("hide");
	}
	if(st_binding_post.classList.contains("post-block-hide")){
		st_binding_post.classList.remove("post-block-hide");
		st_binding_post.classList.add("post-block-show");
	}
}