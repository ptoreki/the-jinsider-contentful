import Footer from '../components/common/layout/Footer';
import Header from '../components/common/layout/Header';
import AllPostsPage from './AllPostsPage';
import LatestPostPage from './LatestPostPage';

const HomePage = () => {
  return (
    <div>
      <LatestPostPage />
      <AllPostsPage />
    </div>
  )
}

export default HomePage; 