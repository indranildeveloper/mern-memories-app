import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Grid,
  Paper,
  Typography,
  CircularProgress,
  Divider,
  CardContent,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, useHistory } from "react-router";
import { getPost, getPostBySearch } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostBySearch({ search: "none", tags: post?.tags.join(",") }));
      setLoading(false);
    }
  }, [post]);

  if (!posts) return null;
  if (isLoading || loading) {
    return (
      <Paper elevation={3} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = (_id) => {
    history.push(`/posts/${_id}`);
  };

  return (
    <Paper style={{ padding: "20px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="h2"
          >
            {post.tags.map((tag) => `#${tag} `)}
          </Typography>
          <Typography gutterBottom variant="body1" component="p">
            {post.message}
          </Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={
              post.selectedFile ||
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            alt={post.title}
          />
        </div>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="body1">
          <strong>Realtime Chat - coming soon!</strong>
        </Typography>
        <Divider style={{ margin: "20px 0" }} />
        <Typography variant="body1">
          <strong>Comments - coming soon!</strong>
        </Typography>
        <Divider style={{ margin: "20px 0" }} />
      </div>
      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">
            You might also like:
          </Typography>
          <Divider />
          <Container maxWidth="xl" className={classes.container}>
            <div>
              <Grid container spacing={3}>
                {recommendedPosts.map(
                  ({ title, name, message, likes, selectedFile, _id }) => (
                    <Grid item xs={12} sm={6} md={3} key={_id}>
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={() => openPost(_id)}
                      >
                        <Card elevation={3}>
                          <CardContent>
                            <Typography gutterBottom variant="h6">
                              {title}
                            </Typography>
                            <img src={selectedFile} width="100%" alt="" />
                            <Typography gutterBottom variant="subtitle2">
                              {name}
                            </Typography>
                            <Typography gutterBottom variant="subtitle2">
                              {message}
                            </Typography>
                            <Typography
                              gutterBottom
                              color="secondary"
                              variant="subtitle1"
                            >
                              Likes: {likes.length}
                            </Typography>
                          </CardContent>
                        </Card>
                      </div>
                    </Grid>
                  )
                )}
              </Grid>
            </div>
          </Container>
        </div>
      )}
    </Paper>
  );
};

export default PostDetails;
