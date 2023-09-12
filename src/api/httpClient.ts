import axios from 'axios';

export const httpClient = async () => {
    const response = await axios.get('/mock_data.json');
    return response.data;
};
