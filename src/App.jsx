import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  const [toast, setToast] = useState({ display: false, message: '', type: '' });

  const notify = (message, type = 'success') => {
    setToast({ display: true, message, type });
    setTimeout(() => {
      setToast({ display: false, message: '', type: '' });
    }, 4000);
  };

  return (
    <Router>
      {toast.display && (
        <div className={`alert-popup alert-${toast.type}`}>
          {toast.message}
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home notify={notify} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;