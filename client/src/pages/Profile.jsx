import React, { useState, useEffect } from 'react';
import AuthService from '../utils/auth'
import { read, listByUser } from '../components/post-comment';
import { Redirect, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { USER_POSTS } from '../utils/queries';

 function Profile({ match }) {
   
    const [values, setValues] = useState({
      user: {following:[], followers:[]},
      redirectToSignin: false,
      following: false
    })
    const [posts, setPosts] = useState([])
    const jwt = auth.isAuthenticated()
    
    const loadPosts = (user) => {
      listByUser({
        userId: user
      }, {
        t: jwt.token
      }).then((data) => {
        if (data.error) {
          console.log(data.error)
        } else {
          setPosts(data)
        }
      })
    }
    const removePost = (post) => {
      const updatedPosts = posts
      const index = updatedPosts.indexOf(post)
      updatedPosts.splice(index, 1)
      setPosts(updatedPosts)
    }
  
      const photoUrl = values.user._id
                ? `/api/users/photo/${values.user._id}?${new Date().getTime()}`
                : '/api/users/defaultphoto'
      if (values.redirectToSignin) {
        return <Redirect to='/signin'/>
      }
      return (
        <Paper className={classes.root} elevation={4}>
          <Typography variant="h6" className={classes.title}>
            Profile
          </Typography>
          <List dense>
            <ListItem>
              {/* <ListItemAvatar>
                <Avatar src={photoUrl} className={classes.bigAvatar}/>
              </ListItemAvatar> */}
              <ListItemText primary={values.user.name} secondary={values.user.email}/> {
               auth.isAuthenticated().user && auth.isAuthenticated().user._id == values.user._id
               ? (<ListItemSecondaryAction>
                    <Link to={"/user/edit/" + values.user._id}>
                      <IconButton aria-label="Edit" color="primary">
                        <Edit/>
                      </IconButton>
                    </Link>
                    <DeleteUser userId={values.user._id}/>
                  </ListItemSecondaryAction>)
              : (<FollowProfileButton following={values.following} onButtonClick={clickFollowButton}/>)
              }
            </ListItem>
            <Divider/>
            <ListItem>
              <ListItemText primary={values.user.about} secondary={"Joined: " + (
                new Date(values.user.created)).toDateString()}/>
            </ListItem>
          </List>
          <ProfileTabs user={values.user} posts={posts} removePostUpdate={removePost}/>
        </Paper>
      )
  }

 export default Profile;