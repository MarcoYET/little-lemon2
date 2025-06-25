import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingLogic from './components/BookingLogic'; // ✅ Updated
import Main from './components/Main';
import ConfirmationPage from './confirmation';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingLogic />} /> {/* ✅ Updated */}
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
