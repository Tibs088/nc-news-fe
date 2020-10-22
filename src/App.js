import React from 'react';
import './App.css';
import { Router } from '@reach/router';
// -- Components
import Header from './components/Header_Comp';
// -- Pages 
import HomePage from './pages/Home_Page';
import TopicsPage from './pages/Topics_Page';
import ArticlesPage from './pages/Articles_Page';
import ArticlePage from './pages/Article_Page';

function App() {
  return (
    <div className="App">
      <Header />
      <div id='Content'>
        <Router>
          <HomePage path='/' />
          <TopicsPage path='/topics' />
          <ArticlesPage path='/articles/:articlesby' />
          <ArticlesPage path='/articles' />
          <ArticlePage path='/articles/article/:article_id' />
        </Router>
      </div>
    </div>
  );
}

export default App;
