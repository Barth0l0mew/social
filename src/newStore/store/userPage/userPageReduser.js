import { FOLLOWS, SETDATA } from "./userPageActionCreator";

let initial = {
  users: []
};
export const userPageReduser = (state = initial, action) => {
  switch (action.type) {
    case FOLLOWS:
      {
        let stateCopy = { ...state,
           users: state.users.map(user=>{
             
             if (user.id===action.payLoad){
               console.log ('userID',user)
               return {...user,followed:!user.followed}
             } 
             return user
           }) };
          console.log('-------------statecopy-----------',stateCopy)
        return stateCopy;
      }
      case SETDATA:{
        console.log (action.payLoad)
        let stateCopy ={...state,users:[...state.users,...action.payLoad]}
        console.log('-------------statecopy-----------',stateCopy)
        // debugger
        return stateCopy
        // return {...state,users:[...state.users,...action.payLoad]}
      }
      default:
        return state 
  }
 
};
