import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Entry } from 'contentful';
import { IPostFields } from '../../@types/generated/contentful';
import striptags from 'striptags';
import { Link } from 'react-router-dom';

type Props = {
    post: Entry<IPostFields>
}

const Posts = ({post}: Props) => {
    const { title, headerImage, body, author, datePublished} = post.fields;
    const authorName = author.fields.name as string; // author is the IProfileFields type.
    
    const condensedBody = striptags(documentToHtmlString(body)).substring(0, 200); //This converts the body rich texts to a HTML string and striptags removes the HTML tags.

    const date = new Date(datePublished);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });


    return(
        <div>
            <h2>{title}</h2>
            <p>By <Link to="/about">{authorName}</Link></p>
            <p>{formattedDate}</p>
            <img src={headerImage.fields.file.url} width="300px" alt="avatar"/>
            <p>{condensedBody+"..."}</p>
        </div>
    )
};

export default Posts;