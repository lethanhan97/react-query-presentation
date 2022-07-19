import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Removing safe mode to allow hljs to do code highlighting and injecting HTML
root.render(<App />);
