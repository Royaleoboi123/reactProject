import React from 'react';
import axios from "axios";
import { useState } from "react";
import AdminNavbar from './AdminNavbar';

function GetAllEmployeeDetails() {
    const [empDetails, setEmpDetails] = useState([]);

    React.useEffect(() => {
        // useEffect(() => {
        document.title = "Get Details";
        if (sessionStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        } else if (localStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        } else {
            // }, []);
            axios.get(`http://localhost:8080/getEmployee`).then((res) => {
                setEmpDetails(res.data);
            });
        }
    }, []);

    console.log(empDetails);

    if (!empDetails) return null;

    const getData = () => {
        axios.get(`http://localhost:8080/getEmployee`).then((res) => {
            setEmpDetails(res.data);
        });
    }


    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/deleteEmployee/${id}`).then((res) => {
            alert(res.data);
            getData();
        });
    }


    return (
        <>
            <div className="container-fluid">
                <AdminNavbar />
                <h2 className="text-centre">List of Employees</h2>
                <table className="table table-bordered table-striped">
                    <thead>
                        <th>Employee id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                    </thead>
                    <tbody>
                        {empDetails.map((e) => (
                            <tr key={e.empId}>
                                <td>{e.empId}</td>
                                <td>{e.firstName}</td>
                                <td>{e.lastName}</td>
                                <td>{e.email}</td>
                                <td>{e.phoneNo}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onDelete(e.empId)}>
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </>
    );
}

export default GetAllEmployeeDetails;
// import React from 'react';

// function getEmployeeDetails() {
//     const [empDetails, setEmpDetails] = useState([]);

//     React.useEffect(() => {
//         axios.get(`http://localhost:8080/getEmployee`).then((res) => {
//             setEmpDetails(res.data);
//         });
//     }, []);
//     console.log(empDetails);

//     if (!empDetails) return null;

//     return (
//         <>
//             <div className="container">
//                 <h2 className="text-centre">List of Employees</h2>
//                 <table className="table table-bordered table-striped">
//                     <thead>
//                         <th>Employee id</th>
//                         <th>First Name</th>
//                         <th>Last Name</th>
//                         <th>Email</th>
//                         <th>Phone No.</th>
//                     </thead>
//                     <tbody>
//                         {empDetails.map((e) => (
//                             <tr key={e.id}>
//                                 <td>{e.id}</td>
//                                 <td>{e.firstName}</td>
//                                 <td>{e.lastName}</td>
//                                 <td>{e.email}</td>
//                                 <td>{e.phoneNo}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>


//         </>
//     );
// }

// export default getEmployeeDetails;
