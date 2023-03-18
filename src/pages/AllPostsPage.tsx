import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../@types/generated/contentful';
import Posts from '../components/common/Posts';
import Footer from '../components/common/layout/Footer';
import Header from '../components/common/layout/Header';
import useContentful from '../contentful/useContentful';
import { Link } from 'react-router-dom';

const AllPostsPage = () => {
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
      <div>
        { posts?.items.map((post) => 
            <div key={post.sys.id}>
              <Posts post={post} />
              <Link to={`/posts/${post.sys.id}`}>Read more</Link>
            </div>
          )}
      </div>
    )

}

export default AllPostsPage
