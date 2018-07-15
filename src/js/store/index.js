// createStore is the function for creating the redux store
import { createStore } from "redux";
import rootReducer from "../reducers/index";

// The store orchestrates all the moving parts in Redux.
// Redux store is fundamental: the state of the whole application lives inside the store
const store = createStore(rootReducer);


// The state of the application lives as a single, immutable object within the store.
export default store;