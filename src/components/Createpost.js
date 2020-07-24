import React from 'react'
import '../post.css'

class Createpost extends React.Component{
	constructor(props){
		super(props);
		this.state={
			img_Aa:"/Images/Post-img/FB-Aa.png",
			render_Bglist:true,
			textBg:"#fff",
			classNameAa:"aa-img"
		};
	}
	closePost =(event) =>{
		this.props.postOpenblock();
	}
	renderBgimg =() =>{
		this.setState({
			render_Bglist:!this.state.render_Bglist,
			img_Aa:this.state.img_Aa === "/Images/Post-img/FB-Aa.png" ? "/Images/Post-img/FB-Post-left.png" : "/Images/Post-img/FB-Aa.png",
			classNameAa:this.state.classNameAa === "aa-img" ? "left-arrow" : "aa-img"
		});
	}
	render(){
		return(
			<div className="post-create-div" >
				<div className="post-cr-block">
					<div className="pos-post-cr">
						<div className="post-cr-main-blk">
							<div className="head-post-cr">
								<div className="head-post-name">
									<h2 className="h2-post-cr">Create post</h2>
								</div>
								<div className="head-post-cross-cr" onClick={this.closePost}></div>
							</div>
							<div className="type-post-cr-div">
								<div className="user-and-privacy">
									<div className="u-post-cr-in">
										<div className="img-u-post">
											<a href="# " className="a-cr-post">
												<img src="/Images/FB-D-u1.png" alt="" className="u-post-cr" />
											</a>
										</div>
										<div className="u-name-cr-post">
											<div className="name-post-cr">
												{"User-Name"}
											</div>
											<div className="privacy-post-cr">
												<img src = "/Images/Post-img/Post-type/FB-PT-Public.png" alt="" className="pri-post-img" />
												<span className="sp-pri-post">{"Public"}</span>
												<span className="post-cr-ar"></span>
											</div>
										</div>
									</div>
								</div>
								<div className="textareaPost">
									<div className="text-area-post">
										<div className="bg-text-div">
											<div className="t-comp-post-cr">
												<TextatraPost />
												<div className="bg-styleing">
													<div className="bg-img-set">
														<div className="aa-default-bg" onClick={this.renderBgimg}>
															{
																this.state.render_Bglist
																		?
																<div className={this.state.classNameAa} style={{backgroundImage:"url("+this.state.img_Aa+")"}}></div>
																		:
																<div className="bgsty">
																	<span className={this.state.classNameAa} style={{backgroundImage:"url("+this.state.img_Aa+")"}} title="Emoji"></span>
																</div>
															}
														</div>
													</div>
													<div className="smile-feel">
														<div className="smile"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="post-details"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Createpost;

export class TextatraPost extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<div className="t-p-cr-ty">
				<textarea className="text-post-cr-type" placeholder="What's on your mind, Muthu?" ></textarea>
			</div>
		);	
	}
}
