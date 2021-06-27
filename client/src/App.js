import classes from './App.module.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className={classes.app}>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
