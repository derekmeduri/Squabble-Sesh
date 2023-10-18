// import { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { NEW_POST } from '../../utils/mutations';

// function postInput () {
//     const [postText, setPostText] = useState('');
//     const [characterCount, setCharacterCount] = useState(250);

//     const [newPost, { error }] = useMutation(NEW_POST);

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
    
//         try {
//           const { data } = await newPost({
//             variables: { postText },
//           });
    
//           setPostText('');
          
//         } catch (err) {
//           console.error(err);
//         }
//       };

//     const handleChange = (event) => {
//         const { name, value } = event.target;
    
//         if (name === 'postText' && value.length <= 250) {
//           setPostText(value);
//           setCharacterCount(value.length);
//         }
//       };
//       return (
//         <div>
//           <h4>Today I want to squabble over...</h4>
//           <p
//             className={`m-0 ${
//               characterCount === 250 || error ? 'text-danger' : ''
//             }`}
//           >
//             Character Count: {characterCount}/250
//             {error && <span className="ml-2">Something went wrong...</span>}
//           </p>
//           <form
//             className="flex-row justify-center justify-space-between-md align-center"
//             onSubmit={handleFormSubmit}
//           >
//             <div className="col-12 col-lg-9">
//               <textarea
//                 name="postText"
//                 value={postText}
//                 className="form-input w-100"
//                 style={{ lineHeight: '1.5' }}
//                 onChange={handleChange}
//               ></textarea>
//             </div>
    
//             <div className="col-12 col-lg-3">
//               <button className="btn btn-primary btn-block py-3" type="submit">
//                 Instigate!
//               </button>
//             </div>
//           </form>
//         </div>
//       );
//     };
    
//     export default postInput;   

import { gql, useMutation } from '@apollo/client';

const NEW_POST = gql`
  mutation AddPost($postInput: PostInput!) {
    addPost(postInput: $postInput) {
      id
      postText
      postAuthor {
        id
        username
        # ... other user fields you need
      }
    }
  }
`;

function PostInput() {
  const [addPost] = useMutation(NEW_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const postText = event.target.postText.value;

    try {
      const { data } = await addPost({
        variables: {
          postInput: {
            id,
            postText
          },
        },
        context: {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        },
      });

      console.log('New post created:', data.addPost);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
      <h4>Today I want to squabble over...</h4>
        <input type="text" name="title" className="postInput"/>
      </label>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostInput;

