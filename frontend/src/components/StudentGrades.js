import { useEffect, useState } from "react";
import { getStudentGrades, getStudent } from "../services/StudentService";
import { useParams } from "react-router-dom";

const StudentGrades = () => {
    const { id } = useParams();
    const [grades, setGrades] = useState([]);
    const [student, setStudent] = useState({});

    useEffect(() => {
        loadGrades(id);
        findStudent(id);
    }, [id]); // rerun whenever id changes

    const loadGrades = async (id) => {
        const response = await getStudentGrades(id);
        setGrades(response.data);
    };

    const findStudent = async (id) => {
        const response = await getStudent(id);
        setStudent(response.data);
    };

    return (
        <div>
            <div className='page-title'>
                <h1>{student.name}</h1>
            </div>
            <div className='page-content'>
                <div className='options'>
                    <div className='add-student-form'>
                        <form>
                            <input placeholder="Eneter/Select the course's name..."></input>
                            <input placeholder="Enter the grade..."></input>
                            <button>+</button>
                        </form>
                    </div>
                </div>
                <div className='students-list'>
                    <ul>
                        {grades.map((grade) => (
                            <li key={grade.id}>
                                {grade.courseName} : {grade.gradeValue}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default StudentGrades;