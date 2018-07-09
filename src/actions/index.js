import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=manel12345";

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
export function createPost(values, callback) {
  const request = axios
    .post(`${BASE_URL}/posts/${API_KEY}`, values)
    .then(() => callback());
  return { type: CREATE_POST, payload: request };
}

export function fetchPost(id) {
  const request = axios.get(`${BASE_URL}/posts/${id}${API_KEY}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}
export function deletePost(id, callback) {
  const request = axios
    .delete(`${BASE_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());
  return {
    type: DELETE_POST,
    payload: id
  };
}
//start with the action creator: what TYPE of event shoul this action creator create? and what should be the return of it? (the payload)
//then, go to the component that will fire (sometime) this action: and connect it to the action creator
//previously created. then, onSubmit,onClick , onCHange..etc or any event handler : will fire the
//action using the actioncreator.
//Now, once the action started, the return value will hit the reducer :
//
