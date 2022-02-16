// import './App.css';
// import Login from './Login';
// function App() {
//   return (
//     <Login />
//   );
// }
// export default App;


import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import PermanentAddress from './PermanentAddress';
import { Route, Routes } from "react-router-dom";
import AdminPage from './Admin';
import QualificationDetails from './QualificationDetails';
import EmployeeDetails from './EmployeeDetails';
import UpdateByAdmin from './UpdateByAdmin';
import Navbar1 from './Navbar';
import EmpPage from './EmpPage';
import UpdatePermAddress from './UpdatePermAddress';
import UpdateQualificationDetails from './UpdateQualificationDetails';
import GetAllEmployeeDetails from './GetAllEmployeeDetails';

function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Login />}></Route>
        <Route path="/empPage" element={<EmpPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/address-details" element={<PermanentAddress />}></Route>
        <Route path="/qualificationdetails" element={<QualificationDetails />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/qualification" element={<QualificationDetails />}></Route>
        <Route path="/employeeDetails" element={<EmployeeDetails />}></Route>
        <Route path="/pleaseUpdateEmpDetails" element={<UpdateByAdmin />}></Route>
        <Route path="/UpdateQualification" element={<UpdateQualificationDetails />}></Route>
        <Route path="/Updateaddress" element={<UpdatePermAddress />}></Route>
        <Route path="/getAllEmployee" element={<GetAllEmployeeDetails />}></Route>

      </Routes>
    </>
  );
}

export default App;
