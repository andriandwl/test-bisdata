import { ActionTypes } from "./action";

const postsReducer = (posts = [], action = {}) => {
  switch (action.type) {
    case ActionTypes.RECEIVE_POSTS:
      return action.payload;
    default:
      return posts;
  }
};

export default postsReducer;
