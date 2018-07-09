import _ from "lodash";
import {
  FETCH_POSTS,
  FETCH_POST
} from "../actions";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id");
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state}
      // newState[post.id] = post
      // return newState;

      /* the 4 previous lines are ES6 equal to the following
       line but less code + nice syntax */
      return { ...state,
        [action.payload.data.id]: action.payload.data
      } //return the previous state, and add to it the nex fetched post

    default:
      return state;
  }
}