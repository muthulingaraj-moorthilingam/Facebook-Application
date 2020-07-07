import React from 'react';
import ReactDOM from 'react-dom';
import '../story.css';
export class Right extends React.Component{

	constructor(){
		super();
		this.state = {render:false};
	}

	showTextstory(event){
		console.log(this.state);
		//renderCopmponent(event,this.state);
		 ReactDOM.render(<Story />,document.getElementById("story-box-ip"));
	}

	render(){
		return(
			<div style={{width:"100%"}} className="parent-SAP">
				<div>
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

class Story extends React.Component{
	render(){
		return(
			<div className="parent-sto-div-container">
				<div className="inner-sto-div">
					<div className="border-div-sto">
						<textarea className="textarea" placeholder="Start typing">
						</textarea>
						<span id="sp-text">Text</span>
					</div>
				</div>
			</div>
		);
	}
}

/*function renderCopmponent(event,state){
	if(state.render === false){
		 ReactDOM.render(<Story />,document.getElementById("story-box-ip"));
	}
}*/