//ActionType
export const ADD_MESSAGE= 'ADD_MESSAGE'
export const CHAGE_MESSAGE = 'CHANGE_MESSAGE'
//ActionCreat
export const onAddMessage = ()=>{
  return {
    type:ADD_MESSAGE,
    payLoad:''
  }
}
export const onChangeMessage = (body)=>{
  return {
    type: CHAGE_MESSAGE,
    payLoad:body
  }
}