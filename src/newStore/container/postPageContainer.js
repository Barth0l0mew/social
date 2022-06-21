import Posts from "../../components/profile/posts/posts"
import {connect} from 'react-redux'
import { ADD_POST_PAGE, onAddPostPage, onChangePostPage } from "../store/postPage/postPageActionCreator"
let mapStateToProps = (state) =>{
  return {
    posts:state.postPage.posts,
    newPost:state.postPage.newPost
  }
}
let mapDispatchToProps = (dispatch)=>{
  return {
    addPost:()=>{
      dispatch(onAddPostPage())
      console.log ('------------------------add',onAddPostPage())
    },
    updateNewPost:(body)=>{
      dispatch(onChangePostPage(body))
      console.log ('-------------------------change',onChangePostPage(body))
    }
  }
  }

// const PostPageContainer= ()=>{
//   return <Posts></Posts>
// }
const PostPageContainer = connect (mapStateToProps,mapDispatchToProps)(Posts)
export default PostPageContainer