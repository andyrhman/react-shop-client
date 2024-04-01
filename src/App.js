import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';
import Search from './pages/search/cari';
import SearchIndex from './pages/search';
import Cari from './pages/test/searchme';
import PageCari from './pages/test/pagecari';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/cari" element={<Search />} />
          <Route path="/search" element={<SearchIndex />} />
          <Route path="/searchme" element={<Cari/>} /> 
          <Route path="/pagecari" element={<PageCari/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
