import React, { Fragment } from 'react';
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
import Dashboard from './pages/Dashboard/Dashboard';
import ScorePage from './pages/ScorePage/ScorePage';
import QuizResponse from './pages/QuizResponse/QuizResponse';
import QuizzesPage from './pages/QuizzesPage/QuizzesPage';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Fragment>
            <div className='main-content'>
              <Route path='/auth' exact component={Auth} />
              <PrivateRoute path='/create-quiz' exact component={CreateQuiz} />
              <PrivateRoute path='/quiz/:quizId' exact component={QuizInfo} />
              <PrivateRoute
                path='/questions/:quizId'
                exact
                component={QuestionsPage}
              />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <PrivateRoute path='/upcoming' exact component={QuizzesPage} />
              <PrivateRoute path='/attempted' exact component={QuizzesPage} />
              <PrivateRoute path='/created' exact component={QuizzesPage} />
              {/* <PrivateRoute path='/statistics' exact component={QuizzesPage} /> */}
              <PrivateRoute
                path='/quiz-response/:quizId'
                exact
                component={QuizResponse}
              />
              <PrivateRoute path='/score' exact component={ScorePage} />
            </div>
          </Fragment>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
