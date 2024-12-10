import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Add Router, Routes, Route for routing
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import Dashboard from './dashboardComponent/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import Header from './components/Navbar';
import './App.css';
import Settings from './settings/profile';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { ThemeContext} from './theme/themeContext';
import './theme/theme.css';

function App() {
  const {theme} = useContext(ThemeContext);
  // console.log(themeContext);

  return (
    <Router> 
      <div className={`position-relative custom-theme-${theme}`}>
        <Header />
        <div className='d-flex'>
          <Sidebar />
          <div className="main-content d-flex mt-5">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} /> 
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Settings />} /> 
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
