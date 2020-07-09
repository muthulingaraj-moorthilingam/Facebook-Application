import React from 'react';
import './story.css';

import { Left } from './story-component/Left.js';
import { Right } from './story-component/Right.js';

class Createstory extends React.Component{
	render(){
		const attributes ={ src:"../public/Images/FB-D-u1.png",href:"#",content:"Stories",headding:"Your story"};
		return(
			<div className="parentStory">
				<Cross />
				<Left attribute={attributes} />
				<Right />
			</div>	
		);
	}
}

export default Createstory;

export class Cross extends React.Component{
	render(){
		return(<div></div>);
	}
}