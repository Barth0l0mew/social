import { messageReducer } from "./reducer/messageReducer";
import { postReducer } from "./reducer/postReducer";

export let store = {
  _state: {
    postPage: {
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
    },
    dialogPage: {
      message: [
        { id: 1, title: "helo" },
        { id: 2, title: "yo-yo" },
        { id: 3, title: "cloase" },
        { id: 4, title: "lo-lo-fo" },
      ],
      newMessage:''
    },
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.postPage = postReducer(this._state.postPage, action);
    this._state.dialogPage = messageReducer(this._state.dialogPage, action)
    rerender();
  },
  subRerender(observer) {
    rerender = observer;
  },
};
let rerender = () => {
  console.log("ho");
};
