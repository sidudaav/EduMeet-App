import axios from 'axios';
import { BASE_API_URL } from '@env';

const axiosConfig = {
    baseURL: BASE_API_URL,
};

export default axios.create(axiosConfig);
