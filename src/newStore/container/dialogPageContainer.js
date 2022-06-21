import PostMessage from "../../components/message/postMessage/postMessage"
import {connect} from 'react-redux'
import { onAddDialogMessage, onPostDialogMessage } from "../store/dialogPage/dialogPageActionCreator"
const mapStateToProps = (state)=>{
return {
  message:state.messagePage.message,
  newMessage:state.messagePage.newMessage
}
}
const mapDispatchToprops = (dispatch)=>{
  // debugger;
  return {
    addMessage:()=>{dispatch(onAddDialogMessage())},
    postMessage:(body)=>{dispatch(onPostDialogMessage(body))}
  }
}

export const DialogPageContainer =  connect(mapStateToProps,mapDispatchToprops)(PostMessage)
