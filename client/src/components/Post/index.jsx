import React, {useState, useEffect} from 'react'
import AuthService from '../../utils/auth'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Comment from '../Comment'
import { useQuery } from '@apollo/client';
import { QUERY_USERPOSTS } from '../../utils/queries'


export default function Post (props){

//   const jwt = AuthService.isAuthenticated()

//   const [values, setValues] = useState({
//     comment: props.post.comment
//   })
  
//   const updateComment = (comment) => {
//     setValues({...values, comment: comment})
//   }

//   const deletePost = () => {   
//     remove({
//       postId: props.post._id
//     }, {
//       t: jwt.token
//     }).then((data) => {
//       if (data.error) {
//         console.log(data.error)
//       } else {
//         props.onRemove(props.post)
//       }
//     })
//   }

//     return (
//       <Card className={classes.card}>
//         <CardHeader
//             action={props.post.postedBy._id === AuthService.isAuthenticated().user._id &&
//               <IconButton onClick={deletePost}>
//                 <DeleteIcon />
//               </IconButton>
//             }
//             title={<Link to={"/me/:username" + props.post.postAuthor}>{props.post.postAuthor}</Link>}
//             subheader={(new Date(props.post.created)).toDateString()}
//             className={classes.cardHeader}
//           />
//         <CardContent className={classes.cardContent}>
//           <Typography component="p" className={classes.text}>
//             {props.post.postText}
//           </Typography>
//         </CardContent>
//         <Comment postId={props.post._id} comment={values.comment} updateComment={updateComment}/>
//       </Card>
//     )
  
// }

// Post.propTypes = {
//   post: PropTypes.object.isRequired,
//   onRemove: PropTypes.func.isRequired
// }
const { loading, error, data } = useQuery(QUERY_USERPOSTS);
console.log(data);
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
const userPost = data.posts;
console.log(userPost)
//const userPost = useQuery(QUERY_USERPOSTS);
return (
  <div className='post-container'>
    {userPost.map(post => 
      <div key={post._id} id='postId'>
        <h2  id='username'>{post.postAuthor}</h2>
        <p  id='post-text'>{post.postText}</p>
        {/* <p key={data.posts.comments.length}></p> */}
        {/* <div className='comment-container'>
          <form>
            <NewComment/>
          </form>
        </div> */}
      </div>
    )}
  </div>
  );
};