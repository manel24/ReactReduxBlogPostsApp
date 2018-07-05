import { combineReducers } from "redux";
import PostsReducer from "../reducers/reducer_posts";

const rootReducer = combineReducers({
   posts: PostsReducer
});

export default rootReducer;
