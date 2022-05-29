import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

export const MarketData = ({ currentPair }) => {
  const { sendMessage, lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_WS_URL
  );

  useEffect(() => {
    const apiCall = JSON.stringify({
      type: 'hello',
      key: 'hello',
      apikey: process.env.REACT_APP_API_KEY,
      heartbeat: false,
      subscribe_data_type: ['exrate'],
      subscribe_filter_asset_id: [currentPair],
      subscribe_update_limit_ms_exrate: 5000,
    });

    currentPair && sendMessage(apiCall);
  }, [currentPair, sendMessage]);

  const formattedTime =
    lastJsonMessage?.time &&
    new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(lastJsonMessage?.time));

  return (
    <section className='border rounded p-3'>
      <h2 className='text-left'>Market Data</h2>
      <div className='row text-center'>
        <div className='col'>
          <h4>Symbol</h4>
          <p>{currentPair}</p>
        </div>
        <div className='col'>
          <h4>Price</h4>
          <p>{lastJsonMessage?.rate}</p>
        </div>
        <div className='col'>
          <h4>Time</h4>
          <p>{formattedTime}</p>
        </div>
      </div>
    </section>
  );
};
