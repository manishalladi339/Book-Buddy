import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to BookBuddy</h1>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/books/:id" component={BookDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
