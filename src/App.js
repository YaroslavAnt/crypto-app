import { useState } from 'react';
import './App.css';
import { History } from './components/History';
import { SubscribeForm } from './components/SubscribeForm';

import React from 'react';
import { MarketData } from './components/MarketData';
import Spinner from './components/Spinner';
import { Alert } from './components/Alert';

function App() {
  const [history, setHistory] = useState([]);
  const [currentPair, setCurrentPair] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className='App container'>
      {loading && <Spinner />}
      {error && <Alert setError={setError} error={error} />}
      <SubscribeForm
        setHistory={setHistory}
        setCurrentPair={setCurrentPair}
        setLoading={setLoading}
        setError={setError}
      />
      <MarketData currentPair={currentPair} />
      <History history={history} currentPair={currentPair} />
    </div>
  );
}

export default App;
