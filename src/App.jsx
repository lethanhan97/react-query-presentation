import './App.css';
import Slides from './Slides';
import { BrowserRouter as Router } from 'react-router-dom';
import Demos from './Demos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Slides />
        <div style={{ padding: '1rem' }}>
          <Demos />
        </div>
      </QueryClientProvider>
    </Router>
  );
}

export default App;
