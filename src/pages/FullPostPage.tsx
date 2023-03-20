import { useParams } from 'react-router-dom';
import Post from '../components/common/Post';
import { usePostById } from '../utils/useReactQuery';

const FullPostPage = () => {
  const { id: postId} = useParams<{ id: string }>();
  const postsQuery = usePostById(postId)
  if(postsQuery.status === 'loading' || postsQuery.status === 'error'){
    return null
  }
  if(postsQuery.data === undefined){
    return null
  }

  return (
    <div>
        <Post post={postsQuery.data}/>
    </div>
  );
};

export default FullPostPage;