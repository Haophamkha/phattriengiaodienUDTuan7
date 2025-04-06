import axios from 'axios';

const BASE_URL = 'https://67f15283c733555e24acd43d.mockapi.io/Customer';

export const getCustomers = () => axios.get(BASE_URL);

export const addCustomer = (user) => axios.post(BASE_URL, user);

export const updateCustomer = (id, user) => axios.put(`${BASE_URL}/${id}`, user);

export const deleteCustomer = (id) => axios.delete(`${BASE_URL}/${id}`);
