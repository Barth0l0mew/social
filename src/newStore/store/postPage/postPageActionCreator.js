//Action Type
export const ADD_POST_PAGE = 'ADD_POST_PAGE'
export const CHANGE_POST_PAGE = 'CHANGE_POST_PAGE'
//Action Creator
export const onAddPostPage = () =>{
  return {
    type: ADD_POST_PAGE
  }
}
export const onChangePostPage = (body) =>{
  return {
    type: CHANGE_POST_PAGE,
    payLoad: body
  }
}