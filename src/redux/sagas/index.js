import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../actions';
import * as api from '../../api'

function* fetchPostSaga() {
  try {
    const posts = yield call(api.fetchPost);
    // console.log('[post]', posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch(err) {
    console.log(err);
    yield put(actions.getPosts.getPostsFailure(err))
  }
}

function* createPostSaga(action) {
  try {
    const posts = yield call(api.createPost, action.payload);
    console.log('[crreatePost]', posts);
    yield put(actions.createPost.createPostSuccess(posts.data));
  } catch(err) {
    console.log(err);
    yield put(actions.createPost.createPostFailure(err))
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
}

export default mySaga;