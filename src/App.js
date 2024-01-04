import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import NotFoundPage from './pages/404';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
