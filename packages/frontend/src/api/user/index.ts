import axios from 'axios'
 
 
export const addUser = (data) => axios.post('/api/user',data).then(res => res.data)
 
export const getList = (data) => axios.get('/api/user',{params:data}).then(res => res.data)
 
export const delUser = (data) => axios.delete(`/api/user/${data.id}`).then(res => res.data)
 
export const updateUser = (data) => axios.patch(`/api/user/${data.id}`,data).then(res => res.data)