import React from 'react';
import { createRoot } from 'react-dom/client';
import ExampleApp from './ExampleApp';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <ExampleApp />
</React.StrictMode>);
