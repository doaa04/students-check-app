import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import StudentsList from './components/StudentsList';
import StudentGrades from './components/StudentGrades';
import Navbar from './components/Navbar';

function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar />
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
