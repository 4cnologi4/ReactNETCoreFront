import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListaUsuarios from './components/Lista';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListaUsuarios/>
      </header>
    </div>
  );
}

export default App;
