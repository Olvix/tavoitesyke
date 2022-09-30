import './App.css';
import { useState } from 'react';

function App() {

  const [age, setAge] = useState('')
  const [heartrateUp, setHeartrateUp] = useState('')
  const [heartrateLow, setHeartraeLow] = useState('')

  function laske(e) {
    e.preventDefault()
    const upper = (200 - age) * 0.85
    const lower = (200 - age) * 0.65
    setHeartrateUp(upper)
    setHeartraeLow(lower)
    
  }

  return (
    <div id="content">
        <h3>Heart rate limits calculator</h3>
        <form onSubmit={laske}>
          <div>
            <label>Age</label>
            <input value={age} onChange={e => setAge(e.target.value)}/>
          </div>
          <div>
            <label>Heart rate limits</label>
            <output>{heartrateUp} - {heartrateLow}</output>
          </div>
          <button>Calculate</button>
        </form>
      </div>
  );
}

export default App;
