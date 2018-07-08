import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostsIndex extends Component {
  renderPosts() {
    console.log("posts rendered..");
    console.log(this.props.posts);
    return _.map(this.props.posts, post => {
      <li className="list-group-item">hi </li>;
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  componentDidMount() {
    console.log("component mount");
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostsIndex);
