import React from 'react';
import { Container, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';

import Header from '../components/Header';
import PostList from '../components/PostList';
import useStyles from './styles';
import { showModal } from '../redux/actions';
import CreatePostModel from '../components/CreatePostModel';

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal())
  }, [dispatch]);

  return <Container maxWidth="lg">
    <Header />
    <PostList />
    <CreatePostModel />
    <Fab color="primary" className={classes.fab} onClick={openCreatePostModal}>
      <AddIcon />
    </Fab>
  </Container>
}