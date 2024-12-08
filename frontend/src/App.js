import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StudentsList from './components/StudentsList';
import StudentGrades from './components/StudentGrades';

function App() {
  return ( 
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route path='/' element={<StudentsList />}></Route>
            <Route path='/students' element={<StudentsList />}></Route>
            <Route path='/students/:id/grades' element={<StudentGrades />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
