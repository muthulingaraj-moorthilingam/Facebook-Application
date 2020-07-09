import React from 'react';
import '../story.css';
export class Left extends React.Component{
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
				<div id="story-box-ip"></div>
			</div>
		);
	}
}

