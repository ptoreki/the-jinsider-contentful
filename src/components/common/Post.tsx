import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Entry } from 'contentful';
import { IPostFields } from '../../@types/generated/contentful';

type Props = {
    post: Entry<IPostFields>
}

const Post = ({post}: Props) => {
    const { title, headerImage, body } = post.fields;
    return(
        <div>
            <h2>{title}</h2>
            <img src={headerImage.fields.file.url} width="300px" alt="avatar"/>
            <p>{documentToReactComponents(body)}</p>
        </div>
    )
};

export default Post;