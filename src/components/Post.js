import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePost } from "../actions/postActions";

class Post extends Component {
  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <div className="post">
          <h4 className="center">{this.props.post.title}</h4>
          <p>{this.props.post.body}</p>
          <div className="center">
            <button onClick={this.handleClick} className="btn gray">
              Delete Post
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStatetoProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.find(post => post.id === id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deletePost: id => {
      dispatch(deletePost(id));
    }
  };
};

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Post);
