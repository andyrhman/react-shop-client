import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';
import Search from './pages/search';
import SearchIndex from './pages/search';
import Cari from './pages/test-search-with-live-filter/searchme';
import PageCari from './pages/test-search-with-live-filter/pagecari';
import CariSubmit from './pages/test-search-filter-submit/searchmesubmit';
import PageCariSubmit from './pages/test-search-filter-submit/pagecarisubmit';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/products" element={<Search />} />

          {/* 
            // ? Test page for search 
            // * Search and filter reference
            // ? https://claude.ai/chat/283a9861-11d3-44b8-9247-79d17d628981
          */}
          <Route path="/pagecari" element={<PageCari/>} />
          <Route path="/searchme" element={<Cari/>} /> 

          <Route path="/pagecarisubmit" element={<PageCariSubmit/>} />
          <Route path="/searchmesubmit" element={<CariSubmit/>} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
