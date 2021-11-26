import { instance } from './base_service';


async function login(req) {
  const resp = await instance.post('/patient/login', req);
 return resp;
}
  
async function create( req) {
 const resp = await instance.post(`/patient/create`, req);
 return resp;
}

export default {
  create,
  login,
};
