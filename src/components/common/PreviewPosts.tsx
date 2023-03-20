import { usePosts } from '../../utils/useReactQuery';
import Posts from './Posts';

const PreviewPosts = () => {
    const postsQuery = usePosts()
    if(postsQuery.status === 'loading' || postsQuery.status === 'error'){
      return null
    }
    const filteredPosts = postsQuery.data?.items.slice(1);
 
    return (
      <div style={{width: 1400}}>
        <h2 style={{borderBottom: "3px solid black"}}> Previous posts</h2>
        { filteredPosts?.map((post) => 
            <div key={post.sys.id}>
              <Posts post={post} />
            </div>
          )}
      </div>
    )
}

export default PreviewPosts;
