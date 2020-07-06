




var logo = document.getElementById('logo');
var input_focus = document.getElementById("input");
var search_box = document.getElementById("search-box");
var arrow = document.getElementById('arrow');
var icon = document.getElementById("icon");
var parent = document.getElementById("parent");
var seeMore = document.getElementById("see-more");

var createBlock = document.getElementById("create-block");
var accountBlock = document.getElementById("account-blk");
var account = document.getElementById("account");

var navigation =document.getElementById("nav-center");

var user_menu = document.getElementById("left-side");

var left_part = document.getElementById("left-side-main-page");
left_part.addEventListener("click",leftSideShow_Hide);


var switch_drak = document.getElementById("switch");
var switch_span = document.getElementById("switch-span");
switch_drak.addEventListener("click",changeDrakMode);

input_focus.addEventListener("focus",focusInputfield);
input_focus.addEventListener("blur",focusInputfield);
user_menu.addEventListener("click",showMenus);


function focusInputfield(event){

	if(event.type === "focus"){
		if(!parent.classList.contains("pa")){
			parent.classList.add("pa");
		}
		input_focus.classList.add("input");
		input_focus.classList.add("ip-trans");
		if(logo.classList.contains('logo')){
			logo.classList.remove("logo");
			search_box.style.width = "240px";
			if(arrow.classList.contains("arrow")){
				arrow.classList.add("arrow-show");
				if(icon.classList.contains("icon")){
					icon.classList.remove("icon");
				}
			}

		}
	}
	else if(event.type === "blur"){
		parent.classList.remove("pa");
		input_focus.classList.remove("input");
		logo.classList.add("logo");
		search_box.style.width = "240px";
		if(arrow.classList.contains("arrow-show")){
			arrow.classList.remove("arrow-show");
			arrow.classList.add("arrow");
			icon.classList.add("icon")
		}
	}
}

function showMenus(event){
	event.stopPropagation();
	switch(event.target.id){
		case "create" :
			show(createBlock);
			break;
		case "messenger":
			hideBlocks();
			break;
		case "notification":
			hideBlocks();
			break;
		case "account":
			showAccount();
			break;
	}
}

function show(createBlock){
	if(createBlock.classList.contains("hide")){
		createBlock.classList.remove("hide");
		createBlock.classList.add("show");
	}
	else if(createBlock.classList.contains("show")){
		createBlock.classList.remove("show");
		createBlock.classList.add("hide");
	}
	accountBlock.classList.remove("show");
	accountBlock.classList.add("hide");
	account.classList.remove("account-act");
	account.classList.add("account");
}

function showAccount(){
	if(accountBlock.classList.contains("hide")){
		accountBlock.classList.remove("hide");
		accountBlock.classList.add("show");
		account.classList.add("account-act");
		account.classList.remove("account");
	}
	else if(accountBlock.classList.contains("show")){
		accountBlock.classList.remove("show");
		accountBlock.classList.add("hide");
		account.classList.remove("account-act");
		account.classList.add("account");
	}
	createBlock.classList.remove("show");
	createBlock.classList.add("hide");
}

function changeDrakMode(event) {
	if(switch_drak.classList.contains("sw-normal")){
		switch_drak.classList.remove("sw-normal");
		switch_drak.classList.add("bg-clr");
		switch_span.classList.remove("sw-normal-span");
		switch_span.classList.add("bg-span-clr");
	}
	else if(switch_drak.classList.contains("bg-clr")){
		switch_drak.classList.remove("bg-clr");
		switch_drak.classList.add("sw-normal");
		switch_span.classList.remove("bg-span-clr");
		switch_span.classList.add("sw-normal-span");
	}
}

function leftSideShow_Hide(event){
	switch(event.target.id){
		case "see-more":
			show_more();
		break;
		case "see-more-a":
			show_more();
		break;
		case "see-more-content":
			show_more();
		break;
	}
}

function show_more(){
	var changeContent = document.getElementById("see-more-content");
	var arrow = document.getElementById("see-more-a");
	var hide_content = document.getElementById("hide-content");
	if(!arrow.classList.contains("rotate")){
		if(hide_content.classList.contains("hide")){
			hide_content.classList.remove("hide");
			hide_content.classList.add("show");
			arrow.classList.add("rotate");
			changeContent.innerHTML = "See Less";
		}
	}
	else{
		hide_content.classList.remove("show");
		hide_content.classList.add("hide");
		arrow.classList.remove("rotate");
		changeContent.innerHTML = "See More";
	}
}

var showHomePage = document.getElementById("cross-arrow");
showHomePage.addEventListener("click",showhomePage);
var root = document.getElementById("root-create");
var left_section = document.getElementById("hide_left_side");
var story_Part = document.getElementById("story-part");
var searchBox =document.getElementById("search-box");
var parentDiv = document.getElementById("parent");
var user_Left_side = document.getElementById("left-side-user");
var  messenger_Icon = document.getElementById("messenger-icon");

function showhomePage(event){
	console.log("yes"+event.target.className);
	var navBar = document.getElementById("nav-center");
	if(navBar.classList.contains("hide")){
		navBar.classList.remove("hide");
	}
	if(root.classList.contains("show")){
		root.classList.remove("show");
		root.classList.add("hide");
	}
	if(left_section.classList.contains("hide")){
		left_section.classList.remove("hide");
		left_section.classList.add("show");
	}
	if(story_Part.classList.contains("hide-story")){
		story_Part.classList.remove("hide-story");
		story_Part.classList.add("show-story");
	}
	if(showHomePage.classList.contains("show")){
		showHomePage.classList.remove("show");
		showHomePage.classList.add("hide");
	}
	if(searchBox.classList.contains("hide")){
		searchBox.classList.remove("hide");
		searchBox.classList.add("show");
	}
	if(parentDiv.classList.contains("parent-story")){
		parentDiv.classList.remove("parent-story");
	}
	if(messenger_Icon.classList.contains("hide")){
		messenger_Icon.classList.remove("hide");
		messenger_Icon.classList.add("show");
	}
	if(user_Left_side.classList.contains("hide")){
		user_Left_side.classList.remove("hide")
	}
}

document.addEventListener("click",hideBlocks);

function hideBlocks(){
	createBlock.classList.remove("show");
	createBlock.classList.add("hide");

	accountBlock.classList.remove("show");
	accountBlock.classList.add("hide");
	account.classList.remove("account-act");
	account.classList.add("account");
}