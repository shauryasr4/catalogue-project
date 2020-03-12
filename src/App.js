import React from 'react';
import './App.css';
import { Container } from './components/container/container.component';
import { AttributesProvider } from './context/attributes.context';

function App() {
  return (
    <div className="App">
      <AttributesProvider>
        <Container />
      </AttributesProvider>
    </div>
  );
}

export default App;
