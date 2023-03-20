import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../@types/generated/contentful';
import Posts from '../components/common/Posts';
import useContentful from '../contentful/useContentful';
import { Link } from 'react-router-dom';

const AllPostsPage = () => {
    const [posts, setPosts] = useState<null | EntryCollection<IPostFields>>(null);
    const { getPosts } = useContentful();
    
    useEffect(() => {
      getPosts()?.then((response) => {
          if (response) {
              setPosts(response);
          }
      });
    }, []);
  
    return (
      <div style={{width: 1400}}>
        <h2 style={{borderBottom: "3px solid black"}}> Previous posts</h2>
        { posts?.items.map((post) => 
            <div key={post.sys.id}>
              <Posts post={post} />
            </div>
          )}
      </div>
    )
}

export default AllPostsPage
