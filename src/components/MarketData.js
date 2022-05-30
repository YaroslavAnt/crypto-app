import { useCoinIoWebsoket } from '../hooks/useCoinIoWebsoket';

export const MarketData = ({ currentPair }) => {
  const [rate, time] = useCoinIoWebsoket(currentPair);

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
          <p>{rate}</p>
        </div>
        <div className='col'>
          <h4>Time</h4>
          <p>{time}</p>
        </div>
      </div>
    </section>
  );
};
