import { useState, useEffect } from 'react';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { message } from 'antd'
axios.defaults.baseURL = '/api/';
//If you are using different URLs, consider removing this line and adding a baseURL in the Axios Config parameter. 

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError>();
  const [loading, setLoading] = useState(axiosParams.method === "GET" || axiosParams.method === "get");

  const fetchData = async (params: AxiosRequestConfig) => {

    try {
      const result = await axios.request(params);
      setResponse(result);
    }
    catch (err: any) {

       message.error(err.message || err.statusText)
      setError(err);

    } 
    finally {
      setLoading(false);
    }
  }

  console.log(error)

  const trigger = () => {
    fetchData(axiosParams);
  }

  useEffect(() => {
    if (axiosParams.method === "GET" || axiosParams.method === "get") {
      fetchData(axiosParams);
    }
  }, []);

  return { response, error, loading, trigger };
}

export default useAxios;
