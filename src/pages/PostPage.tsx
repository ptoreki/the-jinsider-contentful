import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../@types/generated/contentful';
import Post from '../components/common/Post';
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
        { posts?.items.map((post, index) => <Post key={post.sys.id} post = {post}/>)}
      </div>
    )

}

export default PostPage
