import './App.css';
import Slides from './Slides';
import { BrowserRouter as Router } from 'react-router-dom';
import Demos from './Demos';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <Slides />
        <div style={{ padding: '1rem' }}>
          <Demos />
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Router>
  );
}

export default App;
