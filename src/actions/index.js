import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";

const BASE_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=manel12345";

export function fetchPosts() {
  const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
export function createPost(values) {
  const request = axios.post(`${BASE_URL}/posts/${API_KEY}`, values);
  return { type: CREATE_POST, payload: request };
}


//start with the action: what kind of event? and what should be the return of it? (the payload)
//then, go to the component that will fire (sometime) this action: and connect it to the action creator 
//previously create. then, onSublit,onClick , onCHange..etc or any event handler : will fire the 
//action using the actioncreator.
//Now, once the action started, the return value will hit the reducer : 
//