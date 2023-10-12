import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_POST } from '../../utils/mutations';

const postEntry = ({ postId }) => {
    const [postText, setPostText] = useState('');
    const [characterCount, setCharacterCount] = useState(250);

    const [newPost, { error }] = useMutation(NEW_POST);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const { data } = await newPost({
            variables: { postId, postText },
          });
    
          setPostText('');
        } catch (err) {
          console.error(err);
        }
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
    
        if (name === 'postText' && value.length <= 250) {
          setPostText(value);
          setCharacterCount(value.length);
        }
      };
      return (
        <div>
          <h4>Today I want to squabble over...</h4>
          <p
            className={`m-0 ${
              characterCount === 250 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/250
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="postText"
                value={postText}
                className="form-input w-100"
                style={{ lineHeight: '1.5' }}
                onChange={handleChange}
              ></textarea>
            </div>
    
            <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Instigate!
              </button>
            </div>
          </form>
        </div>
      );
    };
    
    export default postEntry;   
