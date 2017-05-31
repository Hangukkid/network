import React from 'react';

class CreatePost extends React.Component{
  render(){
    let placeholder = "";
    switch(this.props.degree){
      case 0: 
        placeholder = "Make a New Post";
        break;
      case 1:
        placeholder = "Write a Comment";
        break;
      case 2:
        placeholder = "Write a Reply";
        break;
      default:
        break;
    }
    return (
      <div className="status-input">
      <h1>Type something</h1>
        <input type="text"
          placeholder={placeholder} 
          value={this.props.newPost.message}
          onChange={this.props.funcUpdateNewPost}
          onKeyPress={this.props.funcPushNewPost} />
      </div>  
    );
  }
};

export default CreatePost;