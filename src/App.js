import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Provider from './Provider';

const App = () => {

  return (
    <div className='App'>
      <Router>
        <Provider />
      </Router>
    </div>
  );
}

export default App;
