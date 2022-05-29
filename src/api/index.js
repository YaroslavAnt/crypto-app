import axios from 'axios';

const AXIOS = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-CoinAPI-Key': process.env.REACT_APP_API_KEY,
  },
});

export class API {
  getHistoryData({ base, quote }) {
    const config = {
      params: {
        period_id: '1DAY',
        time_end: new Date().toISOString(),
      },
    };

    return AXIOS.get(`/v1/exchangerate/${base}/${quote}/history`, config).then(
      (res) => res.data
    );
  }
}
