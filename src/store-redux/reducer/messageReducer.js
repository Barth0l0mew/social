import { ADD_MESSAGE,CHAGE_MESSAGE } from "../../store/action/messagePage/actionCreate";

// import { ADD_MESSAGE, CHAGE_MESSAGE } from "../action/messagePage/actionCreate"

let initial = {
  message: [
    { id: 1, title: "helo" },
    { id: 2, title: "yo-yo" },
    { id: 3, title: "cloase" },
    { id: 4, title: "lo-lo-fo" },
  ],
  newMessage:''
}

export const messageReducerRedux = (state=initial, action)=>{
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
