import React, {useState, useEffect} from 'react'
import AuthService from '../../utils/auth'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Comment from '../Comment'


export default function Post (props){

  const jwt = AuthService.isAuthenticated()

  const [values, setValues] = useState({
    comment: props.post.comment
  })
  
  const updateComment = (comment) => {
    setValues({...values, comment: comment})
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
        <Comment postId={props.post._id} comment={values.comment} updateComment={updateComment}/>
      </Card>
    )
  
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired
}