import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});



// Add a response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error({AXIOS_GLOBAL_ERROR:error.response.data})
        // return Promise.reject(error);  // Re-throw the error if you want to propagate it
    }
);

// axiosInstance.interceptors.request.use(
//     (config) => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             config.headers['Authorization'] = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     },
// );

// axiosInstance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         if (error.response?.status === 401) {
//             console.log('Unauthorized. Redirecting to login...');
//         }
//         return Promise.reject(error);
//     },
// );

export default axiosInstance;
