import { ADD_DIALOG_MESSAGE, POST_DIALOG_MESSAGE } from "./dialogPageActionCreator"

let initial={
  message: [
    { id: 1, title: "helo" },
    { id: 2, title: "yo-yo" },
    { id: 3, title: "cloase" },
    { id: 4, title: "lo-lo-fo" },
  ],
  newMessage:''}
export const dialogPageReduser = (state=initial, action) =>{
  switch (action.type){
    case ADD_DIALOG_MESSAGE:{
      let newMessagePage={
        id:state.message.length+1,
        title:state.newMessage
      }
      let stateCopy = {...state, message:[...state.message,newMessagePage]}
      stateCopy.newMessage=''
      return stateCopy
    }
    case POST_DIALOG_MESSAGE:{
      let stateCopy={ ...state, newMessage :action.payLoad}

      return stateCopy
    }
  }
  return state
}

