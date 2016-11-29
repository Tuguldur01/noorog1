  import {
      hashHistory
  } from 'react-router';

  const initialState = [{
      isAuthenticated: false,
  }]

  export default function CHECK_AUTH(state = initialState, action) {
      switch (action.type) {
          case "CHECK_AUTH":
              {
                  this.isAuthenticated = !!action.data,
                  console.log(this.isAuthenticated);
                  return {
                  }
                  break;
              }
          default:
              return state;
      }
  }