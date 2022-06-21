import React from "react";
import * as axios from 'axios'
import Style from "./user.module.css";
import notPhoto from "../../img/notPhoto.jpg";

class User extends React.Component {
  constructor(props) {
    super(props);
    console.log ('usesr', props)
    this.onBtn = this.onBtn.bind(this);
    // if (this.props.users.length === 0) {
      //debugger;
      // axios
      //   .get("https://social-network.samuraijs.com/api/1.0/users")
      //   .then((response) => {
      //     this.props.dataSet(response.data.items);
      //   });
    // }
    
  }
  componentDidMount(){
    console.log('user2')
    axios
    .get("https://social-network.samuraijs.com/api/1.0/users")
    .then((response) => {
      this.props.dataSet(response.data.items);
    });
  }
  onBtn() {
    // this.props.dataSet([
    //   {
    //     id: 1,
    //     urlFoto:
    //       "https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg",
    //     name: "Dmitry",
    //     photos:{
    //       small:null
    //     },
    //     followed: true,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Minsk",
    //       country: "Belarus",
    //     },
    //   },
    //   {
    //     id: 2,
    //     urlFoto: null,
    //     name: "Vika",
    //     photos:{
    //       small:null
    //     },
    //     followed: false,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "New-York",
    //       country: "USA",
    //     },
    //   },
    //   {
    //     id: 3,
    //     photos:{
    //       small:null
    //     },
    //     urlFoto:
    //       "https://pbs.twimg.com/profile_images/954153617904324608/npjKcxIZ.jpg",
    //     name: "Lena",
    //     followed: false,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Moskow",
    //       country: "Russia",
    //     },
    //   },
    //   {
    //     id: 4,
    //     urlFoto: null,
    //     name: "Pasha",
    //     photos:{
    //       small:null
    //     },
    //     followed: true,
    //     status: "I am a BOSS",
    //     location: {
    //       city: "Kiev",
    //       country: "Ukrain",
    //     },
    //   },
    // ]);
    if (this.props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.dataSet(response.data.items);
        });
    }
  }
  render() {
    return (
      <div className={Style.userWrapper}>
        <button onClick={this.onBtn}>up</button>
        {this.props.users.map((user, id) => (
          <div className={Style.userContainer} key={id}>
            <span>
              <img
                src={user.photos.small ? user.photos.small : notPhoto}
                className={Style.userPhoto}
              ></img>
              {/* <img src={user.urlFoto} className={Style.userPhoto}></img> */}

              <button
                className={Style.userBtn}
                onClick={() => this.props.follows(user.id)}
              >
                {user.followed ? "Follows" : "UnFollows"}
              </button>
            </span>
            <span className={Style.userInfo}>
              <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
              </span>
              <span>
                <div>
                  {/* {user.location.country?user.location.country:null} */}
                </div>
                <div>{/* {user.location.city?user.location.city:null} */}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}
export default User;
