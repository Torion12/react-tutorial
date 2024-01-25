import './App.css';
import names from './names';
import User from './user.js';

function App() {

  return (

    <div className="App">
      <User name={names} />
    </div>
  );
}

export default App;
