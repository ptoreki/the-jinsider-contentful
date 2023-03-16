import { ProfilePage, PostPage, HomePage } from './pages/index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostPage />} />
          <Route path="/about" element={<ProfilePage />} /> 
          <Route path='*' element={<p>The page you were looking for does not exist. <Link to="/"><span>Back to home</span></Link></p>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
