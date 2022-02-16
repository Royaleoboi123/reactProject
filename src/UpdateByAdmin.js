import axios from "axios";
import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";


function UpdateByAdmin() {

    //const userId = sessionStorage.getItem("empId");
    const initialempDetails = { empId: "", salary: "", dateOfJoining: "", dateOfLeaving: "" };
    const [employeeValues, setEmployeeValues] = useState(initialempDetails);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeValues({ ...employeeValues, [name]: value });

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            salary: employeeValues.salary,
            dateOfJoining: employeeValues.dateOfJoining,
            dateOfLeaving: employeeValues.dateOfLeaving

        }
        const url = `http://localhost:8080/updateEmployeeDetails/${employeeValues.empId}`;
        const list = await axios.put(url, data);
        alert(list.data);
        //console.log("data" + data);
        // console.log(123);
    }

    const initialDeptDetails = { deptId: "", deptName: "", headOfDept: "" };
    const [deptValues, setDeptValues] = useState(initialDeptDetails);

    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setDeptValues({ ...deptValues, [name]: value });
    };

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        let data = {
            deptName: deptValues.deptName,
            headOfDept: deptValues.headOfDept
        }
        const url = `http://localhost:8080/updateDepartment/${deptValues.deptId}`;
        const list = await axios.put(url, data);
        alert(list.data);
        //console.log("data" + data);
        // console.log(123);
    }
    useEffect(() => {
        document.title = "Update";
        if (sessionStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        } else if (localStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        }
    }, []);
    return (
        <>

            <div className="container-fluid" style={{ backgroundColor: "#B4D2EA" }}
            >
                <AdminNavbar />
                <div className="row justify-content-center align-items-center"  >

                    <div className="col-0 col-3" style={{ height: "100vh" }} >

                    </div>

                    <div className="col-12 col-md-6 rounded" style={{ backgroundColor: "#E9EAEC" }}>
                        <div className="row justify-content-center align-items-center" style={{}}>
                            <form onSubmit={handleSubmit} >
                                <div className="p-4 ms-5 me-5">
                                    <h2 className="text-center">Update Employee Details</h2>
                                    <div className="mt-1">
                                        <label className="mt-2">Employee Id</label>
                                        <input
                                            className="form-control "
                                            type="number"
                                            name="empId"
                                            placeholder="Employee Id"
                                            value={employeeValues.empId}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Salary</label>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="salary"
                                            placeholder="salary"
                                            value={employeeValues.salary}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Joining date</label>
                                        <input
                                            className="form-control "
                                            type="date"
                                            name="dateOfJoining"
                                            placeholder="date of joining"
                                            value={employeeValues.dateOfJoining}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Leaving date</label>
                                        <input
                                            className="form-control "
                                            type="date"
                                            name="dateOfLeaving"
                                            placeholder="Date of leaving"
                                            value={employeeValues.dateOfLeaving}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>

                                </div>
                            </form>
                            <form onSubmit={handleSubmit1}>
                                <div className="row justify-content-center align-items-center" style={{}}>
                                    <h2 className="text-center">Update Department details</h2>
                                    <div className="mt-1">
                                        <label className="mt-2">Department Id</label>
                                        <input
                                            className="form-control "
                                            type="number"
                                            name="deptId"
                                            placeholder="Department Id"
                                            value={deptValues.deptId}
                                            onChange={handleChange1}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Department</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="deptName"
                                            placeholder="Department"
                                            value={deptValues.deptName}
                                            onChange={handleChange1}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3 mb-3">
                                        <label className="mt-2">Head-of-Department</label>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="headOfDept"
                                            placeholder="Head od Department"
                                            value={deptValues.headOfDept}
                                            onChange={handleChange1}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary mb-5">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-0 col-3" style={{ backgroundColor: "#B4D2EA" }}>

                    </div>
                </div>
            </div>
        </>
    );
}

export default UpdateByAdmin;


















//     const userId = sessionStorage.getItem("empId");
//     const initialempDetails = { salary: "", dateOfJoining: "", dateOfLeaving: "" };
//     const [employeeValues, setEmployeeValues] = useState(initialempDetails);
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setEmployeeValues({ ...employeeValues, [name]: value });
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         let data = {
//             salary: employeeValues.salary,
//             dateOfJoining: employeeValues.dateOfJoining,
//             dateOfLeaving: employeeValues.dateOfLeaving

//         }
//         const url = `http://localhost:8080/addQualificationDetails/${userId}`;
//         await axios.post(url, data);
//         //console.log("data" + data);
//         // console.log(123);
//     }

//     const initialDeptDetails = { deptName: "", headOfDept: "" };
//     const [deptValues, setDeptValues] = useState(initialDeptDetails);

//     const handleChange1 = (e) => {
//         const { name, value } = e.target;
//         setEmployeeValues({ ...deptValues, [name]: value });
//     };

//     const handleSubmit1 = async (e) => {
//         e.preventDefault();
//         let data = {
//             deptName: deptValues.deptName,
//             headOfDept: deptValues.headOfDept
//         }
//         const url = `http://localhost:8080/addQualificationDetails/${userId}`;
//         await axios.post(url, data);
//         //console.log("data" + data);
//         // console.log(123);
//     }
//     return (
//         <div className="container-fluid" style={{ backgroundColor: "#B4D2EA" }}>
//             <div className="row justify-content-center align-items-center" style={{ height: "100vh" }} >

//                 <div className="col-0 col-3" >

//                 </div>

//                 <div className="col-12 col-md-6 rounded" style={{ backgroundColor: "#E9EAEC" }}>
//                     <div className="row justify-content-center align-items-center" style={{}}>
//                         <div>
//                             <form onSubmit={handleSubmit}>
//                                 <div className="p-4 ms-5 me-5">
//                                     <h2 className="text-center">Employee Details</h2>
//                                     <div className="mt-3">
//                                         <label className="mt-2">Salary</label>
//                                         <input
//                                             className="form-control "
//                                             type="text"
//                                             name="salary"
//                                             placeholder="salary"
//                                             value={employeeValues.salary}
//                                             onChange={handleChange}
//                                             required
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="mt-3">
//                                     <label className="mt-2">Joining date</label>
//                                     <input
//                                         className="form-control "
//                                         type="date"
//                                         name="dateOfJoining"
//                                         placeholder="date of joining"
//                                         value={employeeValues.dateOfJoining}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mt-3">
//                                     <label className="mt-2">Leaving date</label>
//                                     <input
//                                         className="form-control "
//                                         type="date"
//                                         name="leavingDate"
//                                         placeholder="dateOfLeaving"
//                                         value={employeeValues.dateOfLeaving}
//                                         onChange={handleChange}
//                                         required
//                                     />
//                                 </div>
//                                 <div className="mt-3">
//                                     <button className="btn btn-primary">
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>
//                         </div>
//                         <div>
//                             <form onSubmit={handleSubmit}>
//                                 <h2 className="text-center">Department details</h2>
//                                 <div className="mt-3">
//                                     <label className="mt-2">Department</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="deptName"
//                                         placeholder="Department"
//                                         value={deptValues.deptName}
//                                         onChange={handleChange1}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Head-of-Department</label>
//                                     <input
//                                         className="form-control "
//                                         type="number"
//                                         name="headOfDept"
//                                         placeholder="Head od Department"
//                                         value={deptValues.headOfDept}
//                                         onChange={handleChange1}
//                                     />
//                                 </div>
//                                 <div>
//                                     <button className="btn btn-primary">
//                                         Submit
//                                     </button>
//                                 </div>
//                             </form>

//                         </div>
//                     </div >
//                     <div className="col-0 col-3" style={{ backgroundColor: "#B4D2EA" }}>

//                     </div>
//                 </div >
//             </div >
//         </div >

//     );
// }

// export default EmployeeDetails;