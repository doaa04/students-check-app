import { useEffect, useState } from "react";
import { getStudentGrades, getStudent, addGrade } from "../services/StudentService";
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

    const [course, setCourse] = useState("");
    const [grade, setGrade] = useState();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "course") setCourse(value);
        if (name === "grade") setGrade(value);
    };

    const handleSubmit = () => {
        const newGrade = { course: course, grade: grade };
        addGrade(newGrade, id);
    }

    return (
        <div>
            <div className='page-title'>
                <h1>{student.name}</h1>
            </div>
            <div className='page-content'>
                <div className='options'>
                    <div className='add-student-form'>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name="course" value={course} onChange={handleInputChange} placeholder="Eneter/Select the course's name..." required></input>
                            <input type="number" name="grade" value={grade} onChange={handleInputChange} placeholder="Enter the grade..." min="0" max="20" step="0.01" required></input>
                            <button type="submit">+</button>
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