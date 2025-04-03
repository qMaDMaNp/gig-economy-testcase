import { get, post, put, del } from './apiService';

export const getBranches = () => get('/branches');

export const createBranch = ({
    name,
    location,
    img
}) => post('/branches', {
    name,
    location,
    img
});