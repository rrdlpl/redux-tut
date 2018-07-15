// In redux the state must return entirely from reducers
// A reducers is a JS function that takes two parameters:
// currentState, action
// A reducer must be pure function. A pure function is one
// that returns the exact same output for the given input.

import { ADD_ARTICLE, DEL_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ARTICLE:
            return { ...state, articles: [ ...state.articles, action.payload ] } ;
        case DEL_ARTICLE:
            const index = state.articles.findIndex(a => a.id === action.payload);
            return {...state, articles: index === 0 ? []: [ state.articles.slice(0, index) , state.articles.slice(index + 1)]};
        default:
            return state;
    }
};

export default rootReducer;
