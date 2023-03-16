import { EntryCollection } from 'contentful';
import { useEffect, useState } from 'react'
import { IProfileFields } from '../@types/generated/contentful';
import Profile from '../components/common/Profile';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
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
        <Header /> 
        { profiles?.items.map((profile, index) => <Profile key={profile.sys.id} profile = {profile}/>)}
        <Footer />
      </div>
    )

}

export default ProfilePage
