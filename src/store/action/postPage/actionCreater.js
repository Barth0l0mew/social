// ActionType
export const ADD_POST = 'ADD_POST';
export const CHANGE_POST = 'CHANGE_POST';

// ActionCreate
export const onAddPost = ()=>{
  return {type: ADD_POST,
          payLoad: ''
        }
}
export const onChangePost = (body) =>{
  return {type: CHANGE_POST,
          payLoad: body
  }
}
