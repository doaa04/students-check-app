import React, { useEffect, useState } from 'react';
import { getStudents } from "../services/StudentService";

const StudentsList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const response = await getStudents();
        console.log(response.data);
        setStudents(response.data);
    };

    return (
        <div>
            <h1>Students</h1>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name} : {student.createDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentsList;
