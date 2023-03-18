import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import { IPostFields } from '../../@types/generated/contentful';
import { BLOCKS, Node } from '@contentful/rich-text-types';
import { Link } from 'react-router-dom';

type Props = {
    post: Entry<IPostFields>
}

const LatestPost = ({post}: Props) => {
    const { title, headerImage, body, author, datePublished} = post.fields;
    const authorName = author.fields.name as string; // author is the IProfileFields type.

    const date = new Date(datePublished);
    const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    const options = {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
            const { url, fileName } = node.data.target.fields.file;
            return <img src={url} alt={fileName} />;
          },
        }
      };

    return(
        <div>
            <h2>{title}</h2>
            <p>By <Link to="/about">{authorName}</Link></p>
            <p>{formattedDate}</p>
            <img src={headerImage.fields.file.url} width="300px" alt="avatar"/>
            <p>{documentToReactComponents(body, options)}</p>
        </div>
    )
};

export default LatestPost;