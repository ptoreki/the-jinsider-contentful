import Posts from '../components/common/Posts';
import { usePosts } from '../utils/useReactQuery';

const AllPostsPage = () => {
  const postsQuery = usePosts()
  if(postsQuery.status === 'loading' || postsQuery.status === 'error'){
    return null
  }

  return (
    <div style={{width: 1400}}>
      <h2 style={{borderBottom: "3px solid black"}}> Previous posts</h2>
      { postsQuery.data?.items.map((post) => 
          <div key={post.sys.id}>
            <Posts post={post} />
          </div>
      )}
    </div>
  )
}

export default AllPostsPage
