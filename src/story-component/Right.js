import React from 'react';
//import ReactDOM from 'react-dom';
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
		//ReactDOM.render(<Story data={this.state}/>,document.getElementById("story-box-ip"));
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
	constructor(props){
		super(props);
		this.state ={
			input:null
		}
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