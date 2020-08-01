import React from 'react'
import '../userposts.css'

class Userposttop extends React.Component{
	constructor(props){
		super(props);
		this.state={

		};
	}
	render(){
		return(
			<div className="post-push-content">
                <div className="p-content">
                    <div className="post-head-user">
                    	<div className="js">
                    		<div>
                    			<img src="Images/FB-D-u1.png" alt="/Images/FB-D-u1.png" className="img-post-user" />
                    		</div>
                    		<div className="user-post-name">
                    			<div className="name-user-post">
                    				<a href="# profile" className="a-post-name">
                    					{this.props.name}
                    				</a>
                    			</div>
                    			<div className="time"></div>
                    			<div className="praivacy-post-user"></div>
                    		</div>
                    	</div>
                    	<div className="dot-post-nav">
                    		<span className="d-post"></span>
                    	</div>
                    </div>
                    <div className="user-post-content-bg">
                    	<div className="p-bg-cont" style={{backgroundImage:"url("+this.props.background+"-bg.jpg)"}}>
                    		<div className="cont-post-user">
                    			{
                    				this.props.content
                    			}
                    		</div>
                    	</div>
                    </div>
                    <div className="like-com-post-user">
                    	<div className="like-comt">
                    		<span className="img-l-c-s li"></span>
                    		<span className="name-l-c-s">Like</span>
                    	</div>
                    	<div className="like-comt">
                    		<span className="img-l-c-s cm"></span>
                    		<span className="name-l-c-s">Comment</span>
                    	</div>
                    	<div className="like-comt">
                    		<span className="img-l-c-s sh"></span>
                    		<span className="name-l-c-s">Share</span>
                    	</div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Userposttop;