import axios from 'axios';

const coinBase = axios.create({
  baseURL: 'https://api.coinbase.com/v2/'
});

export default coinBase;
