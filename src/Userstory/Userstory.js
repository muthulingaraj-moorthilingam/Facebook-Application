import React from 'react';

export class Userstory extends React.Component{
	display =(event) =>{
		alert(event.target.className);
	}
	render(){
		return(
			<div className="div-block-story">
			<a href={this.props.url} className ="story-block-a" onClick={(event) =>this.display(event)}>
			<div className="story-block-a-div">
			<div className ="plus-story">
				<div className="outter-plus user-outer-plue">
					<div className="img-bg other-user">
					</div>
				</div>
				{this.props.data.items.title}
			</div>
			</div>
			</a>
		</div>
		);
	}
}
