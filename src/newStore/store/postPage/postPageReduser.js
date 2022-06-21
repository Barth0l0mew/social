import { ADD_POST_PAGE, CHANGE_POST_PAGE } from "./postPageActionCreator"

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

export const postPageReducer = (state = initial ,action)=>{
  console.log ('---------------------action',action)
  switch (action.type){
    case ADD_POST_PAGE:
      {
        let newPostPage ={
          userId:1,
          id:state.posts.length+1,
          title:state.newPost
        }
        let stateCopy = {...state, posts:[...state.posts,newPostPage]}
        stateCopy.newPost=''
        return stateCopy
      }
    case CHANGE_POST_PAGE:
      { 
        let stateCopy = {...state, newPost:action.payLoad}
        return stateCopy
      }
  }
  return state
}