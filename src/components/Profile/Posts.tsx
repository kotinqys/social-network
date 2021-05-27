import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost, putLikeToPost } from '../../redux/actions/profile';
import { AppStateType } from '../../redux/store';

import Post from './Post';


export default React.memo(function Posts() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { posts } = useSelector((state:AppStateType) => ({
    posts: state.profile.postsData,
  }));

  const handleChange = (e:any) => {
    setText(e.target.value);
  };

  const onAddPost = () => {
    if (text) {
      dispatch(addPost(text));
      setText('');
    }
  };

  const onDeletePost = (id:number) => {
    dispatch(deletePost(id));
  };

  const putLike = (index:number) => {
    dispatch(putLikeToPost(index));
  };

  return (
    <div className='posts'>
      <h3>Все посты</h3>
      <div className='posts__create-post'>
        <textarea name='' id='' cols={30} rows={1} onChange={handleChange} value={text} />
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
