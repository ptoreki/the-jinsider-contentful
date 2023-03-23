import { ProfilePage, AllPostsPage, HomePage, FullPostPage, PodcastsPage } from './pages/index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/common/layout/Header';
import Footer from './components/common/layout/Footer';
import './assets/styles/style.css'
import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';

const App = () => {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className='center'>
          <Header />
          <div className='outer'><div></div></div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<AllPostsPage />} />
            <Route path="/posts/:id" element={<FullPostPage />} />          
            <Route path="/about" element={<ProfilePage />} /> 
            <Route path="/podcasts" element={<PodcastsPage />} /> 
            <Route path='*' element={<p>The page you were looking for does not exist. <Link to="/"><span>Back to home</span></Link></p>} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
