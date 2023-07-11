import axios from 'axios';
import queryString from 'query-string';
import { WashingMachineInterface, WashingMachineGetQueryInterface } from 'interfaces/washing-machine';
import { GetQueryInterface } from '../../interfaces';

export const getWashingMachines = async (query?: WashingMachineGetQueryInterface) => {
  const response = await axios.get(`/api/washing-machines${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createWashingMachine = async (washingMachine: WashingMachineInterface) => {
  const response = await axios.post('/api/washing-machines', washingMachine);
  return response.data;
};

export const updateWashingMachineById = async (id: string, washingMachine: WashingMachineInterface) => {
  const response = await axios.put(`/api/washing-machines/${id}`, washingMachine);
  return response.data;
};

export const getWashingMachineById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/washing-machines/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteWashingMachineById = async (id: string) => {
  const response = await axios.delete(`/api/washing-machines/${id}`);
  return response.data;
};
