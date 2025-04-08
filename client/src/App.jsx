
import Login from "./components/Login";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentDashboard from "./components/StudentDashboard";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/student/home" element={<StudentDashboard/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
