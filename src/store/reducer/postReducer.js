import { ADD_POST, CHANGE_POST } from "../action/postPage/actionCreater";

export const postReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newBodyPost = {
        userId: 1,
        id: state.posts.length + 1,
        title: state.newPost,
      };
      state.newPost = "";
      if (newBodyPost.title) {
        state.posts.push(newBodyPost);
      }
      console.log("addpost");
      break;
    }
    case CHANGE_POST: {
      state.newPost = action.payLoad;
      console.log("changepost", state.newPost);
      break;
    }
  }
  return state;
};
