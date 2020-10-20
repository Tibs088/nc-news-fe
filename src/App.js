import React from 'react';
import './App.css';
import { Router } from '@reach/router';
// -- Components
import Header from './components/Header_Comp';
import NavBar from './components/Nav_Bar_Comp';
// -- Pages 
import HomePage from './pages/Home_Page';
import TopicsPage from './pages/Topics_Page';
import ArticlesPage from './pages/Articles_Page';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <div id='Content'>
        <Router>
          <HomePage path='/' />
          <TopicsPage path='/topics' />
          <ArticlesPage path='/articles' />
        </Router>
      </div>
    </div>
  );
}

export default App;
