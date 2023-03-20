import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../../@types/generated/contentful';
import Posts from './Posts';
import useContentful from '../../contentful/useContentful';

const PreviewPosts = () => {
    const [posts, setPosts] = useState<null | EntryCollection<IPostFields>>(null);
    const { getPosts } = useContentful();
    
    useEffect(() => {
        getPosts()?.then((response) => {
            if (response) {
              const sortedPosts = response.items.sort((a, b) => {
                return new Date(b.sys.createdAt).getTime() - new Date(a.sys.createdAt).getTime();
            });
            // exclude the latest post from the list
            const filteredPosts = sortedPosts.slice(1);
            setPosts({
                ...response,
                items: filteredPosts
            });
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

export default PreviewPosts;
