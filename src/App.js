import React from 'react';
import './App.css';
import Barcode from 'react-barcode';
import BarcodeSettings from './components/barcode-settings/barcode-settings.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BarcodeSettings />
        <Barcode value="hello" />
      </header>
    </div>
  );
}

export default App;
