import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, putLikeToPost } from '../../redux/actions/profile';

import Post from './Post';

export default React.memo(function Posts(props) {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => ({
    posts: state.profile.postsData,
  }));

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const onAddPost = () => {
    if (text) {
      dispatch(addPost(text));
      setText('');
    }
  };

  const onDeletePost = (id) => {
    dispatch(deletePost(id));
  };

  const putLike = (index) => {
    dispatch(putLikeToPost(index));
  };

  return (
    <div className='posts'>
      <h3>Все посты</h3>
      <div className='posts__create-post'>
        <textarea name='' id='' cols='30' rows='1' onChange={handleChange} value={text} />
        <button onClick={onAddPost}>Опубликовать</button>
      </div>
      {posts.map((post, index) => (
        <Post
          key={post.id}
          post={post}
          index={index}
          onDeletePost={onDeletePost}
          putLike={putLike}
        />
      ))}
    </div>
  );
});
