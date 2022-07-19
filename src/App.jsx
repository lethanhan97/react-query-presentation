import './App.css';
import Slides from './Slides';
import { BrowserRouter as Router } from 'react-router-dom';
import Demos from './Demos';

function App() {
  return (
    <Router>
      <Slides />
      <div style={{ padding: '1rem' }}>
        <Demos />
      </div>
    </Router>
  );
}

export default App;
