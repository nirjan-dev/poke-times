import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

class Home extends Component {
  constructor() {
    super();
  }

  componentDidMount() {}

  render() {
    const posts = this.props.posts.map(post => (
      <div className="post card" key={post.id}>
        <img src={Pokeball} alt="A pokeball" />
        <div className="card-content">
          <Link to={"/posts/" + post.id}>
            <span className="card-title red-text">{post.title}</span>
          </Link>
          <p className="post body">{post.body}</p>
        </div>
      </div>
    ));

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        {posts}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};
export default connect(mapStateToProps)(Home);
