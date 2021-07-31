import React from 'react';
import { Card, Avatar, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Icon } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import useStyles from './styles';
export default function Post({post}) {
  const classes = useStyles();
  return <Card>
    <CardHeader
      avatar={<Avatar>A</Avatar>}
      title={post.author}
      subheader={moment(post.updatedAt).format('HH:MM MM DD, YYYY')}
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
    />
    <CardContent>
      <Typography variant="h5" color="textPrimary">{post.title}</Typography>
      <Typography variant="body2" component="p" color="textSecondary">{post.content}</Typography>
    </CardContent>
    <CardMedia
      image={post.attachment ? post.attachment : ''}
      title="Title"
      className={classes.media}
    />
    <CardActions>
      <IconButton>
        <FavoriteIcon />
        <Typography component="span" color="textSecondary">{post.likeCount}</Typography>
      </IconButton>
    </CardActions>
  </Card>
}