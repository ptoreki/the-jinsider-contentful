import { Entry } from 'contentful';
import { IProfileFields } from '../../@types/generated/contentful';

type Props = {
    profile: Entry<IProfileFields>
}

const Profile = ({profile}: Props) => {
    const { name, avatar, description } = profile.fields;
    return(
        <>
            <h1>About</h1>
            <div className='author-container'>
                <div>
                    <img src={avatar.fields.file.url} alt="avatar" className='author-container__avatar'/>
                </div>
                <div className='author-info-container'>
                    <h2 className='author-info-container__name'>{name}</h2>
                    <p className='author-info-container__description'>"{description}"</p>
                </div>
            </div>
        </>
    )
};

export default Profile;