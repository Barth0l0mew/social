import { ADD_MESSAGE, CHAGE_MESSAGE, onChangeMessage } from "../action/messagePage/actionCreate"

export const messageReducer = (state, action)=>{
  switch (action.type){
    case ADD_MESSAGE:{
      let newBodyMessage = {
        id: state.message.length + 1,
        title: state.newMessage,
      };
      state.newMessage = "";
      if (newBodyMessage.title) {
        state.message.push(newBodyMessage);
      }
      console.log("addmessage");
      break;
    }
    case CHAGE_MESSAGE:{
      state.newMessage = action.payLoad;
      console.log("changemessage", state.newMessage);
      break;
    }
  
  }
  return state;
}
