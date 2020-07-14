import React from 'react';

class Left extends React.Component{
	constructor(){
		super();
		this.state={}
	}
	render(){
		return(
			<section className="section-left-side" id="hide_left_side">
				<div className="parent-div-left-main">
                	<div className="p-a-left">
                 	 	<div className="user-details-lest">
                 			<a href="#profile" id="user-left" className="user-left-a">
                    			<div className="user-img-part"></div>
                    			<div className="user-name-part">
                     				{"Muthulingaraj moorthilingam"}
                    			</div>
                  			</a>
                		</div>
                	</div>
              	</div>
              	<List />
              	<More />
			</section>
		);
	}
}
export default Left;

export class List extends React.Component{
	constructor(){
		super();
		this.state={}
	}
	render(){
		const listOfimg = [
		{
			"src":"./Images/FB-Covid.png",
			"content":"COVID-19 Information Center."
		},
		{
			"src":"./Images/FB-Frd.png",
			"content":"Friends"
		},
		{
			"src":"./Images/FB-Msg.png",
			"content":"Messenger"
		},
		{
			"src":"./Images/FB-Page.png",
			"content":"Pages"
		},
		{
			"src":"./Images/FB-Market.png",
			"content":"Marketplace"
		},
		{
			"src":"./Images/FB-Vedio.png",
			"content":"Vedio"
		},
		{
			"src":"./Images/FB-Event.png",
			"content":"Events"
		},
		{
			"src":"./Images/FB-Group.png",
			"content":"Groups"
		},
		{
			"src":"./Images/FB-Fund.png",
			"content":"Fundraisers"
		},
		{
			"src":"./Images/FB-Frd-list.png",
			"content":"Friend lists"
		},
		{
			"src":"./Images/FB-Job.png",
			"content":"Jobs"
		},
		{
			"src":"./Images/FB-Save.png",
			"content":"Save"
		},
		{
			"src":"./Images/FB-Film.png",
			"content":"Films"
		},
		{
			"src":"./Images/FB-Wather.png",
			"content":"Wather"
		},
		{
			"src":"./Images/FB-Offer.png",
			"content":"Offers"
		},
		{
			"src":"./Images/FB-C-R.png",
			"content":"Crisis Response"
		},
		{
			"src":"./Images/FB-Game.png",
			"content":"Gamming video"
		},
		{
			"src":"./Images/FB-Live.png",
			"content":"Live video"
		}
		];
		const listItem = listOfimg.map((img,i) =>
			<div className="p-a-left" key={img.content} >
            	<div className="user-details-lest">
                	<a href="#COVID-19" id="user-left" className="user-left-a">
                    	<img className="img-info" src={img.src} alt="covid-19" />
                    	<div className="user-menu-name-part">
                      		{img.content}
                    	</div>
                 	</a>
            	</div>
         	</div>
		);
		return(
			<div className="parent-div-left-main">
                {listItem}
             </div>
		);
	}
}

export class More extends React.Component{
	constructor(){
		super();
		this.state={}
	}
	render(){
		return(
			<div className="more">
                <span className="more-span">{"Privacy"}</span>
                <span className="more-span">{"Terms"}</span>
                <span className="more-span">{"Advertising"}</span>
                <span className="more-span">{"Ad choices"}</span>
                <span className="more-span">{"Cookies"}</span>
                <span className="more-span">{"More"}</span>
                <span className="more-span-cpy">{"Facebook &copy 2020"}</span>
             </div>
		);
	}
}

/*<div className="p-a-left">
            <div className="user-details-lest">
                <a href="#COVID-19" id="user-left" className="user-left-a">
                    <img className="img-info" src="./Images/FB-Covid.png" alt="covid-19" />
                    <div className="user-menu-name-part">
                      	{"COVID-19 Information Center."}
                    </div>
                 </a>
            </div>
         </div>
         */