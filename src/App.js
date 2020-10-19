import React from 'react';
import './App.css';
import { Router } from '@reach/router';
// -- Components
import Header from './components/Header_Comp';
// -- Pages 
import HomePage from './pages/Home_Page';
import TopicsPage from './pages/Topics_Page';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <HomePage path='/' />
        <TopicsPage path='/topics' />
      </Router>
    </div>
  );
}

export default App;
