import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IPostFields } from '../@types/generated/contentful';
import Post from '../components/common/Post';
import Footer from '../components/common/layout/Footer';
import Header from '../components/common/layout/Header';
import useContentful from '../contentful/useContentful';

const LatestPostPage = () => {
    const [post, setPost] = useState<null | EntryCollection<IPostFields>>(null);
    const { getLatestPost } = useContentful();
    
    useEffect(() => {
        getLatestPost()?.then((response) => {
            if (response) {
                setPost(response);
            }
        });
    }, []);
  
    return (
      <div>
        { post?.items.map((post) => 
            <div key={post.sys.id}>
              <Post post={post} />
            </div>
          )}
      </div>
    )

}

export default LatestPostPage;