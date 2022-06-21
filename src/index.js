import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
// import { store } from './store/store';
// import { storeRedux } from './store-redux/store';
import { store } from './newStore/store/newStore';
const posts=[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio"
  }
]
const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <Provider store= {store}>
      {/* <App posts={store.getState().postPage.posts} user={user} store={storeRedux} dispatch={storeRedux.dispatch.bind(store)}/> */}
      <App user={user}></App>
      </Provider>
    </React.StrictMode>
  );

// storeRedux.subscribe(rerender)
//store.subRerender(rerender);
// rerender();
//console.log (store.getState().postPage.posts)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
