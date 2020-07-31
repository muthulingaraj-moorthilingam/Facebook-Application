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
			overFlow:null,
			emoji:null,
			textvalue:""
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
	emoji =() =>{
		this.setState({
			emoji:!this.state.emoji
		})
	}
	setEmojiforTextarea =(emoji)=>{
		var textarea=document.getElementById("textarea");
		textarea.innerHTML+="&#x"+emoji+";";
		this.setState({
			emoji:!this.state.emoji,
		textvalue:textarea.innerHTML
		})
		//this.value("&#x"+emoji+"; ")	
	}
	value =(event)=>{
		this.setState({
			textvalue:event.target.innerHTML
		});
	}
	pushPost =() =>{
		console.log(this.state.changeBgcolor,"  ",this.state.textvalue);
		this.props.pushThePost(this.state.textvalue,this.state.changeBgcolor);
	}
	render(){
		const bgImgs =[
				"#F0F2F5","rgb(198, 0, 255)","/Images/Post-img/FB-Post-Tree","/Images/Post-img/FB-Post-Sa","/Images/Post-img/FB-Post-Heart",
				"/Images/Post-img/FB-Post-Smile","/Images/Post-img/FB-Post-Fire","/Images/Post-img/FB-Post-Walk","/Images/Post-img/FB-Post-Square"
		];

		const emoji = ["1f4aa","1f9d0","1f44d","1f60b","1f60c","1f60d","1f60e","1f61b","1f61c","1f61d","1f64f","1f600","1f601","1f602","1f603","1f605","1f607",
		"1f609","1f614","1f621","1f634","1f642","1f643","1f916","1f923","1f929","1f937","1f970","1f973","263a"];

		const render =bgImgs.map((img)=>	
			<Bgimgs src={img} key={img} changeBgcolor={this.changeBgcolor} setStyle={this.setStyle} />
		);
		const renderEmoji = emoji.map((emojis) =>
			<Emoji emoji={emojis} key={emojis} setEmojiforTextarea={this.setEmojiforTextarea} />
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
											<div className="t-comp-post-cr">
												{/*<TextatraPost bg={this.state.changeBgcolor} styleFortext={this.state.styleFortext} value={this.value} data={this.state.textvalue}  />*/}
												
												<div className="t-p-cr-ty" style={{backgroundImage:"url("+this.state.changeBgcolor+"-bg.jpg)"}}>
													<div className="text-post-cr-type" id="textarea" data-text="true" placeholder="What's on your mind, Muthu?" contentEditable="true" onKeyUp={this.value} ></div>
												</div>



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
														{ this.state.render_Bglist === false 
																	?
															<div className="s1-4d-parent">
																<div className="sq-4"></div>
															</div>
																	:
																	""
														}
													</div>
													<div className="smile-feel"  >
														<div className="smile" onClick={this.emoji}>
															
														</div>
														{
																this.state.emoji
																	 &&
																<div className="post-emoji-top">
																	<span className="int-mark"></span>
																	<div>
																		<h3 className="sm-p-post">Smileys & people</h3>
																			<div className="emoji-box">
																				{
																					renderEmoji
																				}
																			</div>
																		</div>
																	</div>
														}
													</div>
												</div>
											</div>
											<div className="post-details">
												<Addto />
												<div style={{padding:"16px 16px 0px 16px"}}>
													<div className="post-button" onClick={this.pushPost}>Post</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div >

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Createpost;


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

export class Emoji extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	setEmoji =() =>{
		this.props.setEmojiforTextarea(this.props.emoji);
	}
	render(){
		return(
			<div className="po-emo-box" onClick={this.setEmoji} >
				<img className="po-emo-img" src={"/Images/Post-img/Post-emoji/"+this.props.emoji+".png"} alt={this.props.emoji.toString()}  />
			</div>
		);
	}
}

function Addto(props){
	return(
		<div className="add-to-post">
			<div className="add">
				Add to your post
			</div>
			<div className="post-icon-add">
				<div className="icon-add">
					<span className="i-post-add v">
					</span>
				</div>
				<div className="icon-add">
					<span className="i-post-add p">
					</span>
				</div>
				<div className="icon-add">
					<span className="i-post-add tag">
					</span>
				</div>
				<div className="icon-add">
					<span className="i-post-add location lo">
					</span>
				</div>
				<div className="icon-add">
					<span className="i-post-add sm">
					</span>
				</div>
				<div className="icon-add">
					<span className="i-post-add dots3 dots">
					</span>
				</div>
			</div>
		</div>
	);
}




//<img src={"/Images/Post-img/Post-emoji/"+this.props.emoji[11]+".png"} alt={"&#x"+this.props.emoji[11]+";"}/>

/*<div className="post-emoji-top">
				<span className="int-mark"></span>
				<div>
					<h3 className="sm-p-post">Smileys & people</h3>
					<div className="emoji-box">
						{renderEmoji}
					</div>
				</div>
			</div>

export class TextatraPost extends React.Component{
	constructor(props){
		super(props);
		this.state={
			bgImg:this.props.bg
		}
	}
	value=(event)=>{
		var textarea=document.getElementById("textarea");
		textarea.innerHTML+=this.props.data;
		var p =document.getElementById("p");
		console.log(textarea.innerHTML)
		p.innerHTML=textarea.innerHTML+this.props.data;
		this.props.value(event.target.value);
	}
	render(){
		return(
			<div className="t-p-cr-ty" style={{backgroundImage:"url("+this.props.bg+"-bg.jpg)"}}>
				<div className="text-post-cr-type" id="textarea" placeholder="What's on your mind, Muthu?" contentEditable="true" onKeyUp={this.value} ></div>
				<button onClick={this.value}>click</button>
				<div id="p"></div>
			</div>
		);	
	}
}



			*/