import axios from 'axios';

export const getStudents = () => axios.get('http://localhost:8080/api/students');
export const createStudent = (name) => axios.post('http://localhost:8080/api/students', { name });