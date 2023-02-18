import axios from 'axios'

export const initiateInterceptors  = () => {

    axios.interceptors.request.use(function (config) {

        const token = sessionStorage.getItem('appToken');
        
        config.headers.Authorization = token;
      
        return config;
      });
      
      axios.interceptors.response.use((response) => {
        return response;
      }, function (error) {
        if (error?.response?.status === 401) {
          sessionStorage.removeItem('appToken')
          return
        }
        else {
          return Promise.reject(error.response);
        }
      });
}

export const attachToken = (token: string) => {
    sessionStorage.setItem('appToken', token)
    axios.defaults.headers.common['Authorization'] = token;
}

