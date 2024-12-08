import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudents, createStudent } from "../services/StudentService";

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []); 

    const loadStudents = async () => {
        const response = await getStudents();
        setStudents(response.data);
    };
    
    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createStudent(name);
        loadStudents();
        setName("");
    }

    return (
        <div>
            <div className='page-title'>
                <h1>Students</h1>
            </div>
            <div className='page-content'>
                <div className='options'>
                    <div className='add-student-form'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='name' value={name} onChange={handleInputChange} placeholder='Enter a new student name...' required></input>
                            <button type='submit'>+</button>
                        </form>
                    </div>
                </div>
                <div className='students-list'>
                    <ul>
                        {students.map((student) => (
                            <li key={student.id}>
                                <Link to={`/students/${student.id}/grades`}>{student.name} </Link> : {student.createDate}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentsList;
