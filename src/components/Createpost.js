import React from 'react'
import '../post.css'

class Createpost extends React.Component{
	constructor(props){
		super(props);
		this.state={
			img_Aa:"/Images/Post-img/FB-Aa.png",
			render_Bglist:true,
			textBg:"#fff",
			classNameAa:"aa-img",
			changeBgcolor:null,
			overFlow:null
		};
	}
	setStyle =() =>{
		this.setState({
			overFlow:this.state.changeBgcolor === "#F0F2F5" ? "overFlow" : null 
			
		});
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
	changeBgcolor =(img) =>{
		this.setState({
			changeBgcolor:img
		})
	}
	render(){
		const bgImgs =[
				"#F0F2F5","rgb(198, 0, 255)","/Images/Post-img/FB-Post-Tree","/Images/Post-img/FB-Post-Sa","/Images/Post-img/FB-Post-Heart",
				"/Images/Post-img/FB-Post-Smile","/Images/Post-img/FB-Post-Fire","/Images/Post-img/FB-Post-Walk","/Images/Post-img/FB-Post-Square"
		];

		const render =bgImgs.map((img)=>	
			<Bgimgs src={img} key={img} changeBgcolor={this.changeBgcolor} setStyle={this.setStyle} />
		);
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
											<div className={"t-comp-post-cr "+this.state.overFlow}>
												<TextatraPost bg={this.state.changeBgcolor} styleFortext={this.state.styleFortext} />
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
														{ this.state.render_Bglist === false ?  render : ""}
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
		this.state={
			bgImg:this.props.bg
		}
	}
	render(){
		return(
			<div className="t-p-cr-ty" style={{backgroundImage:"url("+this.props.bg+"-bg.jpg)"}}>
				<textarea className="text-post-cr-type" placeholder="What's on your mind, Muthu?" ></textarea>
			</div>
		);	
	}
}

export class Bgimgs extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	changeBgcolor =() =>{
		this.props.changeBgcolor(this.props.src);
		this.props.setStyle();
	}
	render(){
		return(
			<div className="bg-style-post" onClick={this.changeBgcolor}>
				{
					this.props.src === "#F0F2F5"
							?
					 <span className="img-p-sty r" style={{backgroundColor:this.props.src}}></span>
							:
					this.props.src === "rgb(198, 0, 255)" 
							?
					<span className="img-p-sty" style={{backgroundColor:this.props.src}}></span>
							:
					 <img src={this.props.src+".jpg"} alt="" className="img-p-sty" />

				}
			</div>
		);
	}
}

