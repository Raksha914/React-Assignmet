import React from 'react';
import Sidebar from './components/sidebar';
import TopBar from './components/topbar';
import Dashboard from './dashboardComponent/dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import Header from './components/Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className='d-flex'>
      <Sidebar />
      <div className="main-content d-flex">
        <TopBar />
        <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
