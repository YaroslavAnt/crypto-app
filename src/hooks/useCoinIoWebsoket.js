import { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import { formatDate } from '../utils';
const BASE_CONFIG = {
  type: 'hello',
  key: 'hello',
  apikey: process.env.REACT_APP_API_KEY,
  heartbeat: false,
  subscribe_data_type: ['exrate'],
  subscribe_update_limit_ms_exrate: 5000,
};

export const useCoinIoWebsoket = (currentPair) => {
  const { sendMessage, lastJsonMessage } = useWebSocket(
    process.env.REACT_APP_WS_URL
  );

  useEffect(() => {
    const apiCall = JSON.stringify({
      ...BASE_CONFIG,
      subscribe_filter_asset_id: [currentPair],
    });

    currentPair && sendMessage(apiCall);
  }, [currentPair, sendMessage]);

  const { rate, time } = lastJsonMessage || {};

  const formattedTime = time && formatDate(time);

  return [rate, formattedTime];
};
