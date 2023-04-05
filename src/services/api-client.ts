import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '0ab02055aecd425e8a08984b4a66646e',
  },
});
