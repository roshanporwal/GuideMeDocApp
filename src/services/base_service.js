import axios from 'axios';
import { constants } from '../constants';
//import { store } from '../store';

const instance = axios.create({
  baseURL: `${constants.apiBaseURL}`,
});

instance.interceptors.request.use(
  config => {
    //const state = store.getState();
    const { user } = false;

    if (user && user.token) {
      config.headers.common.authorization = `Bearer ${user.token}`;
      config.headers.common['X-Arnexa-Fid'] = constants.defaultNamespace;
    }
  
    return config;
  },
  error => {
    if(error.message =="Network Error"){
      return "Network Error";
    }
    else{
      console.log(`Error requesting url ${error.config.url}: `, error.message);
      throw error;
    }
   
  },
);

instance.interceptors.response.use(
  resp => {
    return resp.data;
  },
  error => {
    if(error.message  =="Network Error"){
      return "Network Error";
    
    }else if(error.response.data.error="Unauthorized"){
      console.log(`Error requesting url`, error.message);
      return error?.response?.data?.error;
    }

    
    else{
      console.log(`Error requesting url ${error.config.url}: `, error.message);
      throw error?.response?.data;
    }

   
  },
);

export { instance };
