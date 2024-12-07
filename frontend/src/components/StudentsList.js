import React, { useEffect, useState } from 'react';
import { getStudents, createStudent } from "../services/StudentService";

const StudentsList = () => {
    // display student

    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []); // runs only once (one render)

    const loadStudents = async () => {
        const response = await getStudents();
        console.log(response.data);
        setStudents(response.data);
    };
    
    // add student

    const [name, setName] = useState("");

    const handleInputChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = async (e) => {
        await createStudent(name);
        setName("");
    }

    return (
        <div>
            <div className='page-title'>
                <h1>Students</h1>
            </div>
            <div className='page-content'>
                <div className='options'>
                    <div className='search-bar'>
                        <input placeholder='Search for a stuednt...'></input>
                    </div>
                    <div className='add-student-form'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' name='name' value={name} onChange={handleInputChange} placeholder='Enter a new student name...'></input>
                            <button type='submit'>+</button>
                        </form>
                    </div>
                </div>
                <div className='students-list'>
                    <ul>
                        {students.map((student) => (
                            <li key={student.id}>
                                {student.name} : {student.createDate}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='page-navbar'>
            </div>
        </div>
    );
};

export default StudentsList;
