import axios from '../config/endpoint';

const findAll = () => {
  return axios.get('/users');
};

const create = (data) => {
  return axios.post('/users', data);
};

const GetById = async (id) => {
  return axios.get(`/users/${id}`)
};

const update = async (data) => {
  // console.log("h",data);
  return axios.patch(`/users/${data.id}`, data)
}

const deleteUser = async (id) => {
  // console.log(id)
  return axios.delete(`/users/${id.id}`, id)
}

const GetRoles = () => {
  return axios.get('/roles');
}


export default {
  findAll,
  create,
  GetById,
  update,
  deleteUser,
  GetRoles 
};
