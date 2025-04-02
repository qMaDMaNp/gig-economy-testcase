import { get, post, put, del } from './apiService';

export const getBranches = () => get('/branches');