import { useState } from 'react';
import { API } from '../api';

export const SubscribeForm = ({
  setHistory,
  setCurrentPair,
  setLoading,
  setError,
}) => {
  const [currencyPair, setCurrencyPair] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!/[A-Za-z]+\/[A-Za-z]+$/.test(currencyPair)) {
      setError('Please follow the pattern "XXX/YYYY"');
      setCurrencyPair('');
      return;
    }

    setLoading(true);

    const [base, quote] = currencyPair.split('/');

    try {
      const res = await new API().getHistoryData({ base, quote });
      setHistory(res);
      setCurrentPair(currencyPair);
      setCurrencyPair('');
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='justify-content-center border rounded p-3'>
      <form className='row justify-content-center' onSubmit={handleSubscribe}>
        <div className='col-auto'>
          <input
            className='form-control'
            placeholder='ex. BTC/USD'
            value={currencyPair}
            onChange={(e) => setCurrencyPair(e.target.value.toUpperCase())}
          />
        </div>
        <div className='col-auto'>
          <button type='submit' className='btn btn-primary mb-3'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
};
