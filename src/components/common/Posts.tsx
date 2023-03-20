import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Entry } from 'contentful';
import { IPostFields } from '../../@types/generated/contentful';
import striptags from 'striptags';
import { Link } from 'react-router-dom';

type Props = {
    post: Entry<IPostFields>
}

const Posts = ({post}: Props) => {
    const { title, headerImage, body, datePublished} = post.fields;
  
    const condensedBody = striptags(documentToHtmlString(body)).substring(0, 200); //This converts the body rich texts to a HTML string and striptags removes the HTML tags.

    const date = new Date(datePublished);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


    return(
      <>
      <div className='preview-container-wrapper'>
        <div className='preview-container'>
          <img src={headerImage.fields.file.url}alt="image previewing article" className='preview-container__image'/>
            <div className='preview-container__items'>
              <h2 className='preview-container__items_title'>{title}</h2>
              <p className='preview-container__items_date'>- {formattedDate}</p>
            </div>
        </div>
        <div className='body-preview-container'>
          <p>"{condensedBody+"..."}"</p>
        </div>
        <Link to={`/posts/${post.sys.id}`} style={{textDecoration:"none", fontWeight:700}}>Read full article</Link>
        </div>
      </>
    )
};

export default Posts;