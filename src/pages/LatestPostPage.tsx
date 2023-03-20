import { useLatestPost } from '../utils/useReactQuery';
import Post from '../components/common/Post';

const LatestPostPage = () => {
  const postsQuery = useLatestPost()
  if(postsQuery.status === 'loading' || postsQuery.status === 'error'){
    return null
  }
    return (
      <div>
        { postsQuery.data?.items.map((post) => 
            <div key={post.sys.id}>
              <Post post={post} />
            </div>
          )}
      </div>
    )
}

export default LatestPostPage;