import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Home />
      </Router>
    </div>
  );
}

export default App;
