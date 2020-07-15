import React from 'react';

class Feed extends React.Component{
	constructor(props){
		super(props);
		this.state={
			defaultText:"Create a story",
			userBg:"/Images/FB-D-u1.png",
			userText:null,
			userFont:null,
			plus:"/Images/FB-plus.png",
			items:[],
			frdusr:[]
		};
	}
	onclick = (event)=>{
		this.setState({
			userBg : this.state.userBg === "/Images/FB-D-u1.png" ? "/Images/user.png" : "/Images/FB-D-u1.png"
		});

		this.props.childToparent();
	}

	

	componentDidMount(){
		fetch("https://testapi.io/api/Muthuraj/facebook/user/stories")
			.then(res => res.json())
			.then( (data) =>{
				this.setState({
					items:data
				});
				//console.log(this.state.items);
		});
	}

	render(){

		const render = this.state.items.map((items)=>
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
						<div className="story-block-a-div">
							<div >
								<img src={this.state.userBg} alt=" " className="user-sty-login" />
							</div>
							<div className="outter-plus">
								<div className="img-bg">
									<img src={this.state.plus} alt= "" style={{filter:"invert(1)"}}/>
								</div>
							</div>
							<div className ="plus-story">
								{this.props.text}
							</div>
						</div>
					</a>
				</div>
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