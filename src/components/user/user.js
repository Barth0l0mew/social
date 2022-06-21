import React from "react";
import * as axios from 'axios'
import Style from './user.module.css'
import notPhoto from '../../img/notPhoto.jpg'
import { onFollows } from "../../newStore/store/userPage/userPageActionCreator";
const User = (props)=>{
  console.log ('users',props)
  // debugger;
  const onBtn = ()=>{
    props.dataSet([
      {
        id: 1,
        urlFoto:'https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg',
        fullName: "Dmitry",
        follows: true,
        status: "I am a BOSS",
        location: {
          city: "Minsk",
          country: "Belarus",
        },
      },
      {
        id: 2,
        urlFoto:null,
        fullName: "Vika",
        follows: false,
        status: "I am a BOSS",
        location: {
          city: "New-York",
          country: "USA",
        },
      },
      {
        id: 3,
        urlFoto:'https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg',
        fullName: "Lena",
        follows: false,
        status: "I am a BOSS",
        location: {
          city: "Moskow",
          country: "Russia",
        },
      },
      {
        id: 4,
        urlFoto:null,
        fullName: "Pasha",
        follows: true,
        status: "I am a BOSS",
        location: {
          city: "Kiev",
          country: "Ukrain",
        },
      },
    ])
  }
  if (props.users.length===0){
    axios.get ('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
    props.dataSet(response.data.items)  
    console.log (response.data)})
    // props.dataSet([
    //   {
    //     id: 1,
    //     urlFoto:'https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg',
    //     fullName: "Dmitry",
    //     follows: true,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Minsk",
    //       country: "Belarus",
    //     },
    //   },
    //   {
    //     id: 2,
    //     urlFoto:null,
    //     fullName: "Vika",
    //     follows: false,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "New-York",
    //       country: "USA",
    //     },
    //   },
    //   {
    //     id: 3,
    //     urlFoto:'https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg',
    //     fullName: "Lena",
    //     follows: false,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Moskow",
    //       country: "Russia",
    //     },
    //   },
    //   {
    //     id: 4,
    //     urlFoto:null,
    //     fullName: "Pasha",
    //     follows: true,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Kiev",
    //       country: "Ukrain",
    //     },
    //   },
    // ])
  }
  return(
    <div className={Style.userWrapper}>
      <button onClick={onBtn}>up</button>
    {props.users.map((user,id)=> <div className={Style.userContainer} key={id}>
        <span >
        <img src={user.photos.small?user.photos.small:notPhoto} className={Style.userPhoto}></img>
            {/* <img src={user.urlFoto} className={Style.userPhoto}></img> */}
          
          
            <button className={Style.userBtn} onClick={()=>props.follows(user.id)}>
              {user.followed?'Follows':'UnFollows'}
            </button>
          
        </span>
        <span className={Style.userInfo}>
          <span>
            <div>
              {user.name}
            </div>
            <div>
              {user.status}
            </div>
          </span>
          <span>
            <div>
              {/* {user.location.country?user.location.country:null} */}
            </div>
            <div>
              {/* {user.location.city?user.location.city:null} */}
            </div>
          </span>
        </span>
      </div>
    )}
    </div>
  )
}
export default User