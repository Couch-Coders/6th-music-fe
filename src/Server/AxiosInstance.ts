import axios from 'axios';

const axiosInstance = axios.create({ baseURL: 'https://api.exsmple.com' });
axiosInstance.defaults.headers.common['Authorization'] = `FIREBASE AUTH TOKEN`;
export default axiosInstance;
