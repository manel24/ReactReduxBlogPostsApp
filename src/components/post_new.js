import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

class PostNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field; //we can now access field.meta.error and field.meta.touched
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">{touched ? error : ""}</div>
      </div>
    );
  }
  //{field.meta.error}//this will be the error msg returned (if any) from the validate fx (the name property wires things up)
  onSubmit(values) {
    //this === component
    //console.log(values);
    this.props.createPost(values, () => {
      this.props.history.push("/"); 
      //a callback that's executed once the createPost finishes  
      //return to the posts index page once the post is created successfully
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderField} />
        <Field
          label="Catgories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-danger" to="/">
          Cancel{" "}
        </Link>
      </form>
    );
  }
}
function validate(values) {
  //cnsole.log(values) => {title:'cnjf', categories:'cdnjcnjc',content:'njnj'}
  const error = {};
  if (!values.title) {
    error.title = "enter a title!";
  }
  if (!values.categories) {
    error.categories = "enter a category!";
  }
  if (!values.content) {
    error.content = "enter a content!";
  }
  return error;
  // if errors is empty, the form is fine to sumbit
  // if errors haas *any* of the properties not empty, redux form assumes the fors is not valid
}
export default reduxForm({ validate: validate, form: "NewPostForm" })(
  connect(
    null,
    {
      createPost
    }
  )(PostNew)
);
