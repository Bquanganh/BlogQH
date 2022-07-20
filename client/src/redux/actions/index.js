import {createActions} from 'redux-actions';

export const getType = (reduxAction) =>{
    return reduxAction().type;
}

export const getPosts = createActions({
    getPostsRequest: undefined,
    getPostsSuccess: (payLoad) => payLoad,
    getPostsFailure: (err) => err,
});