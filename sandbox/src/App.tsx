import { useState } from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState(false);

  return (
    <div>
      <button onClick={() => setTest(!test)}>test</button>
      {test ? (
        <div>test is true</div>
      ) : (
        <div>test is false</div>
      )}
    </div>
  );
}

export default App;
