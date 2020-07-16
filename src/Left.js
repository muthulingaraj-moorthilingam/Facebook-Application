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
		this.state={
			more:"See More",
			rotate:null
		}
	}

	onclick =()=>{
		this.setState({
			more:this.state.more === "See More" ? "See Less" : "See More",
			rotate :this.state.rotate === null ? "rotate" : null
		});
	}

	render(){
		const moreList =[
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
                {
                	this.state.more === "See Less" && <Moreopt list={moreList}/>
                }
                <div className="p-a-left" onClick ={this.onclick} > 
                  <div className="user-details-lest">
                  <a href="# " id="see-more" className="user-left-a">
                    <div className={this.state.rotate+" less-more-arrow"} id="see-more-a"></div>
                    <div className="user-menu-name-part" id="see-more-content">
                     {this.state.more}
                    </div>
                  </a>
                </div>
                </div>
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

export class Moreopt extends React.Component{
	constructor(props){
		super(props);
		this.state={};
	}
	render(){
		const listItem = this.props.list.map((img,i) =>
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

/*
<div className="p-a-left">
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