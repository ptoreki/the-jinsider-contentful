import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import { IPostFields } from '../../@types/generated/contentful';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';

type Props = {
    post: Entry<IPostFields>
}

const Post = ({post}: Props) => {
    const { title, headerImage, body, author, datePublished} = post.fields;
    const authorName = author.fields.name as string; // author is the IProfileFields type.

    const date = new Date(datePublished);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
            const { url, fileName } = node.data.target.fields.file;
            return <img src={url} alt={fileName} className="author-avatar" />;
          },
        }
      };

    return(
      <>
        <div className='post-container'>
          <img src={headerImage.fields.file.url}alt="featured image" className='post-container__image'/>
            <div className='post-container__items'>
              <p className='post-container__items__category'></p>
              <h2 className='post-container__items__title'>{title}</h2>
              <div style={{marginTop:15}}>
                <div style={{width: 700, height: 13, backgroundColor:"rgba(186, 12, 47, 1)"}}></div>
                <div style={{width: 700, height: 3, backgroundColor:"rgba(255, 255, 255, 1)"}}></div>
                <div style={{width: 700, height: 7, backgroundColor:"rgba(0, 32, 91, 1)"}}></div>
                <div style={{width: 700, height: 3, backgroundColor:"rgba(255, 255, 255, 1)"}}></div>
                <div style={{width: 700, height: 13, backgroundColor:"rgba(186, 12, 47, 1)"}}></div>
              </div>
              <p className='post-container__items__author'>By <Link to="/about" style={{ color: 'inherit', textDecoration: 'inherit', textTransform: 'uppercase'}}>{authorName}</Link></p>
              <p className='post-container__items__date'>- {formattedDate}</p>
            </div>
        </div>
        <div className='body-container'>
          <p>{documentToReactComponents(body, options)}</p>
        </div>
      </>
    )
};

export default Post;