import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentDashboard from "./components/StudentDashboard";
import RoomApplication from './components/RoomApplication';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/student/home" element={<StudentDashboard />}></Route>
        <Route path="/student/roomApplication" element={<RoomApplication/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
