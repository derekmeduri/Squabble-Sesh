import React, {useState, useEffect} from 'react'
import AuthService from '../../utils/auth'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {remove, like, unlike} from '..post-comment'
import Comments from './Comments'


export default function Post (props){

  const jwt = AuthService.isAuthenticated()
  const checkLike = (likes) => {
    let match = likes.indexOf(jwt.user._id) !== -1
    return match
  }
  const [values, setValues] = useState({
    like: checkLike(props.post.likes),
    likes: props.post.likes.length,
    comments: props.post.comments
  })
  

  const clickLike = () => {
    let callApi = values.like ? unlike : like
    callApi({
      userId: jwt.user._id
    }, {
      t: jwt.token
    }, props.post._id).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        setValues({...values, like: !values.like, likes: data.likes.length})
      }
    })
  }

  const updateComments = (comments) => {
    setValues({...values, comments: comments})
  }

  const deletePost = () => {   
    remove({
      postId: props.post._id
    }, {
      t: jwt.token
    }).then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        props.onRemove(props.post)
      }
    })
  }

    return (
      <Card className={classes.card}>
        <CardHeader
            action={props.post.postedBy._id === AuthService.isAuthenticated().user._id &&
              <IconButton onClick={deletePost}>
                <DeleteIcon />
              </IconButton>
            }
            title={<Link to={"/user/" + props.post.postedBy._id}>{props.post.postedBy.name}</Link>}
            subheader={(new Date(props.post.created)).toDateString()}
            className={classes.cardHeader}
          />
        <CardContent className={classes.cardContent}>
          <Typography component="p" className={classes.text}>
            {props.post.text}
          </Typography>
        </CardContent>
        <CardActions>
          { values.like
            ? <IconButton onClick={clickLike} className={classes.button} aria-label="Like">
                <FavoriteIcon />
              </IconButton>
            : <IconButton onClick={clickLike} className={classes.button} aria-label="Unlike">
                <FavoriteBorderIcon />
              </IconButton> } <span>{values.likes}</span>
              <IconButton className={classes.button} aria-label="Comment">
                <CommentIcon/>
              </IconButton> <span>{values.comments.length}</span>
        </CardActions>
        <Divider/>
        <Comments postId={props.post._id} comments={values.comments} updateComments={updateComments}/>
      </Card>
    )
  
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}