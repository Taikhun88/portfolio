import Routes from './routes';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <header>
      <Nav/>
    </header>

    <Router>
      <Routes />
    </Router>

      <Footer/>

    </>

  );
}

export default App;
