import {connect} from 'react-redux'
//import User from '../../components/user/user'
import User from '../../components/user/userClass'
import { onFollows, onSetData } from '../store/userPage/userPageActionCreator'
const mapStateToProps = (state)=>{
  console.log ('state',state)
  // debugger
  return {
    users:state.userPage.users
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    follows:(id)=>{ dispatch(onFollows(id))
      },
    dataSet:(body)=>{dispatch(onSetData(body))}
  }
}
export const UserPageContainer = connect (mapStateToProps,mapDispatchToProps)(User)