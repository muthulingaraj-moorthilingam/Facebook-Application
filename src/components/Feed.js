import React from 'react';

class Feed extends React.Component{
	constructor(props){
		super(props);
		this.state={
			defaultText:"Create a story",
			defaultStyle:null,
			userBg:"/Images/FB-D-u1.png",
			userText:null,
			userFont:null,
			useStyle:null,
			plus:"/Images/FB-plus.png",
			items:[],
			frdusr:[],
			
		};
	}
	onclick = (event)=>{
		this.setState({
			userBg : this.state.userBg === "/Images/FB-D-u1.png" ? "/Images/user.png" : "/Images/FB-D-u1.png"
		});

		this.props.childToparent();
	}

	

	render(){
		console.log(this.props.storyDone)

		const render = this.props.dataApi.map((items)=>
			<div className="div-block-story" key ={items.userId} >
				<a href="#stories" className ="story-block-a" >
					<div className="story-block-a-div" style={{backgroundImage:"url("+items.bgImg+")"}}>
						<div className ="plus-story top">
							<div >{items.name}</div>
						</div>
						<div className="outter-plus user-outer-plue">
							<div className="img-bg other-user">
							</div>
						</div>
					</div>
				</a>
			</div>
		);

		return(
			<div className="parnt-sty-root-child">
				<div className="div-block-story">
					<a href="# " className ="story-block-a" onClick={this.onclick}>
						<div className="story-block-a-div" >
							<div>
								<div >
									<img src={this.state.userBg} alt=" " className="user-sty-login" />
								</div>
								<div className="outter-plus">
									<div className="img-bg">
										<img src={this.state.plus} alt= "" style={{filter:"invert(1)"}}/>
									</div>
								</div>
								<div className ="plus-story">
									{ this.state.defaultText }
								</div>
							</div>
						</div>
					</a>
				</div>
				{
					this.props.storyDone
							&&
					<div className="div-block-story" >
						<a href="#stories" className ="story-block-a" >
							<div className="story-block-a-div">
								<div className="rel">
									<img src={this.props.img} alt="" className="sty-img-style"/>
									<div className="ab-st-feed" style={this.props.style}>
										{this.props.text}
									</div>
								</div>
							</div>
						</a>
					</div>	
				}
				{render}
			</div>
		);
	}
}


/*
export class Frduser extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		return(
			<div className="div-block-story">
			<a href="/stories/" className ="story-block-a" onClick={(event) =>this.display(event)}>
			<div className="story-block-a-div" style={{}}>
			<div className ="plus-story">
				<div className="outter-plus user-outer-plue">
					<div className="img-bg other-user">
					</div>
				</div>
				{this.props.item.userBg}
			</div>
			</div>
			</a>
		</div>
		);
	}
}
*/
export default Feed;

/*
this.props.storyDone
										?
									<div className="rel">
										<img src={this.props.img} alt="" className="sty-img-style"/>
											<div className="ab-st-feed" style={this.props.style}>
												{this.props.text}
											</div>
									</div>
									:
									
									<div>
										<div >
										<img src={this.state.userBg} alt=" " className="user-sty-login" />
									</div>
									<div className="outter-plus">
										<div className="img-bg">
											<img src={this.state.plus} alt= "" style={{filter:"invert(1)"}}/>
										</div>
									</div>
									<div className ="plus-story" style={this.props.style}>
										{ this.props.text || this.state.defaultText }
									</div>
									</div>
									*/