import axios from 'axios';

const API_URL = 'http://localhost:8080/api/students';

export const getStudents = () => axios.get(API_URL);
export const createStudent = (name) => axios.post(API_URL, { name });
export const getStudentGrades = (id) => axios.get(`${API_URL}/${id}/grades`);
export const getStudent = (id) => axios.get(`${API_URL}/${id}`);