## redux workshop for supervisa

we going to build star wars and wrather app with react/redux

================================================================

### Store.js

<pre><code>

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/indexReducer";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;



</code></pre>

### indexReducer.js

<pre><code>
import { combineReducers } from "redux";

export default combineReducers({});
</code></pre>

### dataReducer.js

<pre><code>
const initalState = {
  data: []
};

export const dataReducer = (state = initalState, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

</code></pre>

### getData.js

<pre><code>
import axios from "axios";

export const getData = () => dispatch => {
  axios.get("https://swapi.co/api/people").then(res =>
    dispatch({
      type: "GET_DATA",
      payload: res.data
    })
  );
};
</code></pre>
