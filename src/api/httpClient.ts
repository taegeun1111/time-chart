import axios from 'axios';

export const httpClient = async () => {
  const res = await axios.get('/mock_data.json');
  return res.data.response;
};
