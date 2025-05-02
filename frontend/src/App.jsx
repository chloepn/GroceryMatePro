// src/App.jsx
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import { ThemeProvider } from './contexts/ThemeContext';

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');
  const [selectedList, setSelectedList] = useState(null);
  
  return (
    <ThemeProvider>
      <div className="flex h-screen">
        <Sidebar 
          activeView={activeView} 
          setActiveView={setActiveView} 
        />
        <div className="flex-1 flex flex-col overflow-hidden">
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