import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost } from "../actions/index";

class ShowPost extends Component {
  componentDidMount() {
    //const id = this.props.match.params.id; ==> ES6 equivalent
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    console.log("props", this.props);
    if (post) {
      console.log("ShowPost rendered..");
      //this.props === ownProps
      console.log("fetched post:", post);
      return (
        <div>
          <Link to="/">Back to main page</Link>
          <h3>Title: {post.title}</h3>
          <h6> categories: {post.categories}</h6>
          <p> content: {post.content}</p>
          <Link className="btn btn-danger" to="/posts/delete/{post.id}">
            delete{" "}
          </Link>
        </div>
      );
    }
    return <div>loading...</div>;
  }
}
function mapStateToProps({ posts }, ownProps) {
  //=== mapStateToProps(state) then fetch state:posts
  //return { posts }; //we don't want to get all the big posts list, but only the post with the mentioned id
  //=> use the ownProps to use the 'id' param
  return { post: posts[ownProps.match.params.id] };
}
export default connect(
  mapStateToProps,
  { fetchPost }
)(ShowPost);
