import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../@types/generated/contentful';
import Post from '../components/common/Post';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import useContentful from '../contentful/useContentful';

const PostPage = () => {
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
      <div>
        <Header />
          { posts?.items.map((post) => <Post key={post.sys.id} post = {post}/>)}
        <Footer />
      </div>
    )

}

export default PostPage