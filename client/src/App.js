import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import CreateQuiz from './pages/CreateQuiz/CreateQuiz';
import Auth from './pages/Auth/Auth';
import QuizInfo from './pages/QuizInfo/QuizInfo';
import QuestionsPage from './pages/QuestionsPage/QuestionsPage';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <PrivateRoute path='/create-quiz' exact component={CreateQuiz} />
          <PrivateRoute path='/quiz/:quizId' exact component={QuizInfo} />
          <PrivateRoute
            path='/questions/:quizId'
            exact
            component={QuestionsPage}
          />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
