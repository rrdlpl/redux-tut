
// The only way to change the state is by sending a signal to the store.
// The signal is an action. Dispatching an action is the the process of sending
// out a signal.

import { ADD_ARTICLE, DEL_ARTICLE } from "../constants/action-types";

export const addArticle = article => ({
    type: ADD_ARTICLE,
    payload: article
});

export const deleteArticle = id => ({
    type: DEL_ARTICLE,
    payload: id
})