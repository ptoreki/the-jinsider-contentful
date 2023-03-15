import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IProfileFields } from '../@types/generated/contentful';
import Profile from '../components/common/Profile';
import useContentful from '../contentful/useContentful';

const ProfilePage = () => {

    const [profiles, setProfiles] = useState<null | EntryCollection<IProfileFields>>(null);

    const { getProfiles } = useContentful();
  
    
    useEffect(() => {
        getProfiles()?.then((response) => {
            if (response) {
                setProfiles(response);
            }
        });
    }, []);
  
    return (
      <div>
        { profiles?.items.map((profile, index) => <Profile key={profile.sys.id} profile = {profile}/>)}
      </div>
    )

}

export default ProfilePage
