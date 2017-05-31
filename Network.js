import React from 'react';
import './App.css';
import CreatePost from './CreatePost.js';
import RenderPost from './RenderPost.js';

class Network extends React.Component{
	constructor() {
		super();
		this.state = {
			postList : [],
			newPost: {message: "", time: "",
			},
		}
	}	


	
	handleNewPost (event) {
		if(event.key === "Enter" && !event.shiftKey){	
			let postList = this.state.postList.slice();
			let postNode = this.state.newPost;
			postNode.date = this.date();
			postList.push(postNode);
			this.setState({
				postList: postList,
				newPost: {message: "", time: ""}
			});
		event.preventDefault();		
		}
	}

	updateNewPost(event){
		let newPost = this.state.newPost;
		newPost.message = event.target.value;
		this.setState({newPost: newPost});
	}

	date(){
		let date = new Date();
		let timeArray = [String(date.getHours()), String(date.getMinutes())];

		let time = timeArray[0] + ":" + timeArray[1];
		return time;

	}
	renderPosts(){
		let postsRendered = [];
		for (let i = 0; i < this.state.postList.length(); i++){
			postsRendered.push(<RenderPost 
								newPost={this.state.newPost}
								degree={this.props.degree}
								key={i}
								/>)
		}
		return postsRendered;
	}

	render() {
		if(this.props.degree < 3){
			let degree = this.props.degree;

			return (
				<div>
					<div className="user container">
						<CreatePost 
									newPost={this.state.newPost}
									funcUpdateNewPost={this.updateNewPost}
									funcHandleNewPost={this.handleNewPost}
									degree={this.props.degree}/>
						{this.renderPosts()}
					</div>
				</div>
			);
		}
		else{
			return(null);
		}
	}	
}

export default Network;