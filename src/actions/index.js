import axios from "axios";

export const FETCH_POSTS = "fetch_posts";

const BASE_URL='http://reduxblog.herokuapp.com/api';
const API_KEY='?key=manel12345'

export function fetchPosts() {
    const request = axios.get(`${BASE_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
