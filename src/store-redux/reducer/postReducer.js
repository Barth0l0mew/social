import { ADD_POST,CHANGE_POST } from "../../store/action/postPage/actionCreater";

// import { ADD_POST, CHANGE_POST } from "../action/postPage/actionCreater";

let initial = {
  posts: [
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
    },
    {
      userId: 1,
      id: 3,
      title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    },
    {
      userId: 1,
      id: 4,
      title: "eum et est occaecati",
    },
    {
      userId: 1,
      id: 5,
      title: "nesciunt quas odio",
    },
  ],
  newPost: "",
}

export const postReducerRedux = (state=initial, action) => {
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
