import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage from './BookingPage';
import Main from './components/Main';
import ConfirmationPage from './confirmation'; // ✅ Add this

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} /> {/* ✅ Fix */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
