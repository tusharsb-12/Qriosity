import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import CreateQuiz from './pages/CreateQuiz/CreateQuiz';
import Auth from './pages/Auth/Auth';
import QuizInfo from './pages/QuizInfo/QuizInfo';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/auth' exact component={Auth} />
          <Route path='/create-quiz' exact component={CreateQuiz} />
          <Route path='/quiz/:quizId' component={QuizInfo} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
