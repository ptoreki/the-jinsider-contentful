import { Entry } from 'contentful';
import { IProfileFields } from '../../@types/generated/contentful';

type Props = {
    profile: Entry<IProfileFields>
}

const Profile = ({profile}: Props) => {
    const { name, avatar, description } = profile.fields;
    return(
        <div>
            <h2>{name}</h2>
            <img src={avatar.fields.file.url} width="300px" alt="avatar"/>
            <p>{description}</p>
        </div>
    )
};

export default Profile;