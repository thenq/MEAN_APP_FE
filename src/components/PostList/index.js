import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions';

import Post from './Post';
import { postState$ } from '../../redux/selectors';

export default function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(postState$);
  // console.log('posttt', posts)

  React.useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest())
  }, [dispatch]);

  return <Grid container spacing={2} alignItems="stretch">
    {posts.map(post =>
    <Grid key={post._id} item xs={12} sm={6}>
      <Post key={post._id} post={post}></Post>
    </Grid>)}
    {
    /* <Grid item xs={12} sm={6}>
      <Post></Post>
    </Grid>
    <Grid item xs={12} sm={6}>
      <Post></Post>

    </Grid>
    <Grid item xs={12} sm={6}>
      <Post></Post>

    </Grid> */}
  </Grid>
}