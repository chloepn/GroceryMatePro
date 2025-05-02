import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/App.css'; // Import the CSS file

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedList, setSelectedList] = useState(null);
  
  return (
    <ThemeProvider>
      <div className="app-container">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
        />
        <div className="main-content">
          <Header activeView={activeView} />
          <MainContent 
            activeView={activeView} 
            setActiveView={setActiveView} 
            selectedList={selectedList}
            setSelectedList={setSelectedList}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;