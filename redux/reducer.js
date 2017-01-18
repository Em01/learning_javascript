
/*A reducer is a function that returns a piece of the applications state.
Because the app may have many different pieces of state, we can have many different reducers.
Reducers producer the value of our state.
Application state is generated by reducers
A function that produces the value of our state

{
books: [{title: 'A title'}], //Books reducer
activeBook: {title: 'Another title} // Active books reducer
*/




//Accepts the State and Action as arguments and returns the next state.


const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT': 
      return state - 1;
    default: 
      return state;
  }
}

expect(
    counter(0, {type: 'INCREMENT'})
).toEqual(1);

//mj assertion library
//When you pass a counter of 0 state with the increment action you expect 1.

expect(
    counter(1, {type: 'INCREMENT'})
).toEqual(2);

expect(
    counter(2, {type: 'DECREMENT'})
).toEqual(1);

//TO WIRE IN A REDUCER

import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer
});

export rootReducer;
