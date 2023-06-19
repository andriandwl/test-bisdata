import axios from "axios";

const ActionTypes = {
  RECEIVE_POSTS: "RECEIVE_POSTS",
};

const asyncReceivePost = () => async (dispatch) => {
  try {
    const posts = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({
      type: ActionTypes.RECEIVE_POSTS,
      payload: posts.data,
    });
  } catch (error) {
    alert(error.message);
  }
};

export { ActionTypes, asyncReceivePost };
