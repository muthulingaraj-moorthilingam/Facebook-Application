import React from 'react';
import '../story.css'
import logo from "../story-component/Story/FB-Setting.png"
import fontLogo from "../story-component/Story/FB-Font.png";
import down from "../story-component/Story/FB-DW.png";
class Story extends React.Component{
	constructor(props){
		super(props);
		this.state={
			textArea:null,
			typingdata:"",
			style:this.props.default.style,
			text:"",
			styleu:null,
			showTextArea:null,
			postingArea:null,
			displayHide:"block",
			backGrounfimage:"/Images/StoryBgimg/FB-Default-bg.jpg"
		};
	}
	on = () =>{
		//var ip=document.getElementById('ip');
		//var value = "noe default" /*ip.value;*/
		//this.props.childToparent(value);
		this.props.childToparent(this.state.text,this.state.styleu);
	}
	childToparentData = (data) =>{
		this.setState({
			typingdata:data,
			text:data
		});
	}
	addStyle =(style) =>{
		this.setState({
			style:style,
			styleu:style
		});
	}

	addBgimage =(bgImg)=>{
		this.setState({
			backGrounfimage:bgImg
		});
	}

	showTextarea = () =>{
		this.setState({
			showTextArea: !this.state.showTextArea,
			postingArea: !this.state.postingArea,
			displayHide:this.state.displayHide === "block" ? "none" : "block"
		});
	}

	render(){
		const img ="./story-logos/FB-D-u1.png";
		return(
			<div>
				<div className="parent-div-ur-cr-sto">
					<div className="left-side-create-u-s">
						<div className="inner-left">
							<div className="cross-icon-div" onClick={this.on}>
								<Cross />
							</div>
						</div>
						<div className="left-side-story-head">
							<div className="head-flex">
								<div className="head-flex-left">
									<a href="# " className="left-story-a">{"Stories"}</a>
									<h1 className="left-u-story-head">{"Your story"}</h1>
								</div>
								<div className="left-side-setting">
									<img src={logo} alt=" " className="impot-logo" />
								</div>
							</div>
						</div>
						<div className="input-user-story-left">
							<div className ="user-details-story">
								<div className="in-user-d">
									<img className="crt-user" src ={this.props.img} alt="" />
									<div className="user-name-left">{"user"}</div>
								</div>
							</div>
							<hr style={{margin:"20px 0px 0px 0px"}} />
							{
								this.state.showTextArea
										&&
									<div>
										<div className="text-parent">
											<Textarea childToparentData={this.childToparentData}  />
										</div>
										<div className="font-list">
											<Ul default={this.props.default} addStyle={this.addStyle} />
										</div>
										<div>
											<Background addBgimage={this.addBgimage} />
										</div>
									</div>
							}
						</div>
					</div>
					<div className="story-right-sife-frame" >
						{/*this.state.typingdata style={this.state.style}*/}
						<div className ="add-div-type" style={{display:this.state.displayHide}}>
							<div>
								<div className="right-side-parent">
									<div className="inner-right">
										<div className="right-flex">
											<div className="create-story-type">
												<div className="add-SPS add-Photo">
													<div className="position">
														<div className="add-poto-story photo"></div>
														<div className="add-poto-story-name">
															{"Add photo"}
														</div>
													</div>
												</div>
												<div className="add-SPS add-Story" onClick={this.showTextarea}>
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
						<div>
							{
								this.state.postingArea
										&&
								<Posting value={this.state.typingdata} style={this.state.style} background={this.state.backGrounfimage}/>
							}
						</div>
					</div>
				</div>
				
				{/*<div>
					<input type="text" id="ip" />
					<button onClick={this.on}>{"Click"}</button>
				</div>*/}
			</div>
		);
	}
}

export default Story;

export class Cross extends React.Component{
	render(){
		return(
			<div className="cross-icon">
			</div>
		);
	}
}

export class Background extends React.Component{
	constructor(props){
		super(props);
		this.state={
			bgImg:[
				"/Images/StoryBgimg/FB-Sty-bg.jpg","/Images/StoryBgimg/FB-Sty-bg1.jpg",
				"/Images/StoryBgimg/FB-sty-bg2.jpg","/Images/StoryBgimg/FB-Sty-bg3.jpg","/Images/StoryBgimg/FB-Sty-bg4.jpg",
				"/Images/StoryBgimg/FB-Sty-bg5.jpg","/Images/StoryBgimg/FB-Sty-bg6.jpg","/Images/StoryBgimg/FB-Sty-bg-7.jpg",
				"/Images/StoryBgimg/FB-Sty-bg-8.jpg","/Images/StoryBgimg/FB-Sty-bg-9.jpg","/Images/StoryBgimg/FB-Sty-bg-10.jpg",
				"/Images/StoryBgimg/Fb-Sty-bg-11.jpg","/Images/StoryBgimg/FB-Sty-bg-12.jpg","/Images/StoryBgimg/FB-Sty-bg-13.jpg",
				"/Images/StoryBgimg/FB-Sty-bg-14.jpg","/Images/StoryBgimg/FB-Sty-bg-15.jpg","/Images/StoryBgimg/FB-Sty-bg-16.jpg",
				"/Images/StoryBgimg/FB-Sty-bg-17.jpg","/Images/StoryBgimg/FB-Sty-bg-18.jpg","/Images/StoryBgimg/FB-Sty-bg-19.jpg",
				"/Images/StoryBgimg/FB-Sty-bg-20.jpg","/Images/StoryBgimg/FB-Sty-bg-21.jpg","/Images/StoryBgimg/FB-Sty-bg-22.jpg"
			]
		};
	}
	setImgbg = (bgImg) =>{
		this.props.addBgimage(bgImg);
	} 
	render(){
		return(
			<div className="bg-parent">
				<div className="bg-heading">
					{"Backgrounds"}
				</div>
				<div className="imgBg">
					{
						this.state.bgImg.map((img,i) =>
							<Image setImage={this.setImgbg} 
								key={i.toString()}
								img={img}
							/>
						)
					}
				</div>
			</div>
		);
	}
}

export class Image extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	changeBg =() =>{
		this.props.setImage(this.props.img);
	}
	render(){
		return(
			<div className="img-div" onClick={this.changeBg}>
				<div className="img-in-div">
					<img src={this.props.img} className="img-bgimg" alt="" />
				</div>
			</div>
		);
	}
} 

export class Posting extends React.Component{
	constructor(props){
		super(props);
		this.state={}
	}
	render(){
		return(
			<div className ="style-post" id="show-post">
				<div className="pad-post-div">
					<div className="heading-div">
						<div className="heading-in-div">{"Preview"}</div>
					</div>
					<div className="inner-post-div">
						<div className="inner-block-post">
							<div className="frame-part" >
								<div className="bind-text"  style={{backgroundImage:"url("+this.props.background+")"}}>
									<div style={this.props.style}>
										{this.props.value}
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

export class Textarea extends React.Component{
	constructor(props){
		super(props);
		this.state={
			value:null
		};
	}
	sentChildto =(event) =>{
		this.setState({
			value:event.target.value
		});
		console.log(event.target.value.length);
		this.props.childToparentData(event.target.value);
	}
	render(){
		return(
			<div className="top-textarea">
				<div className="border-div-sto">
						<textarea className="textarea" placeholder="Start typing" onChange={this.sentChildto}>
						</textarea>
					<span id="sp-text">Text</span>
				</div>
			</div>
		);
	}
}

export class Ul extends React.Component{
	constructor(props){
		super(props);
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
			],
			defaultStyle:this.props.default.style,
			defaultName:this.props.default.name,
			showFontlist:null,
			classname:null
		};
	}
	store =()=>{
		this.setState({
			showFontlist:!this.state.showFontlist,
			classname:this.state.classname === null ?"position-div":null
		});
	}
	setFontstyle =(name,style)=>{
			this.setState({
				defaultName:name,
				defaultStyle:style,
				classname:this.state.classname === "position-div" ? null : "position-div"
			});
			this.props.addStyle(style);
	}
	render(){
		return(
			<div className="t-ul" onClick={this.store}>
				<div className="screen-font">
					<div className="f-f">
						<img src={fontLogo} alt="" className="font" />
						<div className ="font-name" style={this.state.defaultStyle} >
						{this.state.defaultName}
						</div>
					</div>
					<div className="font-arrow">
						<img src={down} alt="" className="font-dw" />
					</div>
				</div>
				<div >
					<div>
						<div className={this.state.classname}>
							{
								this.state.showFontlist
										&&
								this.state.font.map((list) =>

									<Ful set={this.setFontstyle} 
										key={list.name}
										name={list.name}
										style={list.style}
									/> 
								)
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export class Ful extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	sentToparnt = () =>{
		this.props.set(this.props.name,this.props.style);
	}
	render(){
		return(
			<div className="list-font-div">
				<div className="font-style-list">
					<div className="font-content" style={this.props.style} onClick={this.sentToparnt} >
						{this.props.name}
					</div>
				</div>
			</div>
		);
	}
}


/*<span style={this.props.style} onClick={this.sentToparnt}>{this.props.name}</span>*/

/*<ul className="font-family-ul">
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
</ul>*/