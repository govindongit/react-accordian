import logo from './logo.svg';
import './App.css';
import Accordian from './components/accordian';
import { useState } from 'react';

function App() {

  const [selected, setSelected] = useState(null)

  return (
    <div className="App">
      {/*Acccordian */}
      <Accordian/>
    </div>
  );
}

export default App;  
