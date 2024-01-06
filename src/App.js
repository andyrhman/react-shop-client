import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';
import Search from './pages/search/[search]';
import SearchIndex from './pages/search';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/search/:searchTerm" element={<Search />} />
          <Route path="/search" element={<SearchIndex />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
