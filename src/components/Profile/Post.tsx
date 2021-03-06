import React from 'react';
import like from '../../assets/like.png';
import { PostsType } from '../../redux/types.ts/type';

type PropsType = {
  post: PostsType
  index: number
  onDeletePost: (id:number) => void
  putLike:(index:number)=>void
}

const Post:React.FC<PropsType> = ({ post, index, onDeletePost, putLike }) =>{
  const deletePost = () => {
    onDeletePost(index);
  };
  const onPutLike = () => {
    putLike(index);
  };
  return (
    <div className='posts__posts'>
      <div className='post'>
        <div className='post__title'>
          <div className='post__header'>
            <img
              src='https://sun9-72.userapi.com/impg/BTTPhoECky4NqwKOT8tkgmG5y5-00GAKCWHyWA/9QeIgD2D1OA.jpg?size=640x882&quality=96&sign=08bd341eb1fb284531b265f6733b4733&type=album'
              alt=''
            />
            <div className='post__author'>
              Диас Сериков
              <p>{post.data}</p>
            </div>
          </div>
          <span onClick={deletePost}>X</span>
        </div>
        <div className='post__body'>{post.post}</div>
        <hr className='post__hr'  />
        <div className='post__likes'>
          <img
            onClick={onPutLike}
            className={post.isLiked ? 'post__like--black' : 'post__like'}
            src={like}
          />
          <span>{post.countLike}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
