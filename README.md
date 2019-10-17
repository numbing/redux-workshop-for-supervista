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
