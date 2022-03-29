import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CourseDetails from './components/Courses/CourseDetails';
import Courses from './components/Courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/courses" element={<Courses />} /> */}
        <Route path="/courseInfo/:courseId" element={<PrivateRoute>
          <CourseDetails />
        </PrivateRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
