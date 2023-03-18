import { ProfilePage, AllPostsPage, HomePage, PostPage } from './pages/index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/common/layout/Header';
import Footer from './components/common/layout/Footer';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<AllPostsPage />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/about" element={<ProfilePage />} /> 
          <Route path='*' element={<p>The page you were looking for does not exist. <Link to="/"><span>Back to home</span></Link></p>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
