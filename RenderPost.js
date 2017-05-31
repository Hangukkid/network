import React from 'react';
import './App.css';
import Network from './Network.js'

class RenderPost extends React.Component{
	render(){
		return(
			<div>
				<p>{this.props.newPost.time}</p>
				<p>{this.props.newPost.message}</p>
				<button onClick={this.props.updateLike}>Like</button>
				<Network degree={this.props.degree + 1} />
			</div>
			);
	}
}

export default RenderPost;


