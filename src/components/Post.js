import React from 'react';
import '../post.css'
class Post  extends React.Component{
	constructor(props){
		super(props);
		this.state={
			userImg:"/Images/FB-D-u1.png",
			userName:"default-User"
		};
	}
	renderPost = () =>{
		this.props.postOpenblock();
	}
	render(){
		return(
			<div className="create-post">
				<div className="cr-post">
					<div className="pad-cr-post">
						<div className="cr-post-flex">
							<div className="search-user">
								<div className="user-cr-pic">
									<a href="# " className="a-cr-post">
										<img className="img-cr-post" src={this.state.userImg} alt="" />
									</a>
								</div>
								<div className="search-blk-post" onClick={this.renderPost} >
									<div className="cr-mind">
										{"What's on your mind, "}{this.state.userName}
									</div>
								</div>
							</div>
							<div className="media-cr-post">
								<div className="logo-cr-p w">
									<div className="logo-cr  vedio"></div>
									<div className="logo-cr-name">
										Live Video
									</div>
								</div>
								<div className="logo-cr-p w">
									<div className="logo-cr photo1"></div>
									<div className="logo-cr-name">
										Photo/Vedio
									</div>
								</div>
								<div className="logo-cr-p">
									<div className="logo-cr feeling"></div>
									<div className="logo-cr-name">
										Feeling/Activity
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
export default Post;