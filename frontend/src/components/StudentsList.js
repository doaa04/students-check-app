import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStudents, createStudent } from "../services/StudentService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

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

    const calculateAverage = (grades) => {
        if (!grades.length) return -1; 
        const total = grades.reduce((sum, grade) => sum + grade.gradeValue, 0);
        return total / grades.length;
    };      

    const getStudentStyle = (average) => {
        if (average === -1) return "new-student";
        return average >= 10 ? "student-passed" : "student-failed";
    };
      

    return (
        <div>
            <div className='top'>
                <div className='page-title' id='students-title'>
                    <h1>All students</h1>
                </div>
                <div className='options'>
                    <div className='add-form'>
                        <form onSubmit={handleSubmit}>
                            <input id="left" type='text' name='name' value={name} onChange={handleInputChange} placeholder='Enter a new student name...' required></input>
                            <button type='submit'><FontAwesomeIcon icon={faPlus} /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='page-content'>
                <div className='list-container'>
                    <ul className='show-list'>
                        {students.map((student) => (
                            <li key={student.id} className='show-list-element' id={getStudentStyle(calculateAverage(student.grades))}>
                                <div className='student-name'>
                                    <Link to={`/students/${student.id}/grades`}>{student.name} </Link>
                                </div>
                                <div className='student-creation-date'>
                                    {new Date(student.createDate).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentsList;
