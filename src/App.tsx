import { useState } from 'react';
import './App.css';

export default function App() {
  const [screen, setScreen] = useState(1);

  return (
    <div className="app">
      <p>Screen {screen}</p>
      <button onClick={() => setScreen((s) => s + 1)}>Next</button>
    </div>
  );
}
