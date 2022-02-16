// import axios from "axios";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const initialValues = { firstName: "", lastName: "", email: "", phoneNo: "", pass: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        //console.log(123);
        // console.log(typeof formErrors);
        // console.log(validate(formValues));
        console.log(Object.keys(formErrors).length);

        if (Object.keys(formErrors).length === 0) {
            // console.log(formValues);
            let data = {
                firstName: formValues.firstName,
                lastName: formValues.lastName,
                email: formValues.email,
                phoneNo: formValues.phoneNo,
                pass: formValues.pass
            }
            // console.log(Object.keys(formErrors).length);
            const url = "http://localhost:8080/addEmployee";
            const list = await axios.post(url, data);
            alert(list.data);
            //console.log("data" + data);
            console.log(123);

            // window.location = "/Login";
        }
        else {
            alert("Enter Details Correctly");
        }

        // if (isSubmit) {
        //     const url = "http://localhost:8080/addUser";
        //     const body = {
        //         fName: formValues.fName,
        //         lName: formValues.lName,
        //         email: formValues.email,
        //         mob: formValues.mobNo,
        //         password: formValues.password,
        //     };
        //     await axios.post(url, body);
        // }
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const formErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const regex1 = /[3-9]/;
        const regex3 = /^[a-zA-Z\\s]*$/i;
        const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;


        if (!values.firstName) {
            formErrors.firstName = "First name is required!";
        } else if (!regex3.test(values.firstName)) {
            formErrors.firstName = "This is not a valid Name format!";
        }

        if (!values.lastName) {
            formErrors.lastName = "Last name is required!";
        } else if (!regex3.test(values.lastName)) {
            formErrors.lastName = "This is not a valid Name format!";
        }

        if (!values.email) {
            formErrors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            formErrors.email = "This is not a valid email format!";
        }

        if (!values.phoneNo) {
            formErrors.phoneNo = "Contact number is required!";
        } else if (!regex2.test(values.phoneNo)) {
            formErrors.phoneNo = "This is not a valid phoneNo format!";
        }

        if (!values.pass) {
            formErrors.pass = "Password is required!";
        } else if (!regex1.test(values.pass)) {
            formErrors.pass =
                "your password should have more than 4 digits and less than 9 digits";
        }
        return formErrors;
    };
    const signOut = () => {
        sessionStorage.clear();
        localStorage.clear();
        window.location = "/Login";
    };

    return (
        <div className="container-fluid bg-primary bg-opacity-25">

            <Navbar bg="dark" variant="dark">
                <Container className='ms-0'>
                    <Navbar.Brand href="#home" style={{ height: "80px", fontSize: "40px", marginLeft: "0px" }}>EMPLOYEE MANAGEMENT SYSTEM</Navbar.Brand>
                    <Nav className="me-0">
                        <button className="btn btn-primary btn-sm" onClick={signOut} >Go to Login</button>
                    </Nav>
                </Container>
            </Navbar>
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className=" text-center head">Registered in successfully</div>
            ) : (
                <p className="text-center head">Fill following details to register !</p>
            )}

            <div className="row justify-content-center align-items-center bg-dark mt-0"
                style={{ height: "100vh" }}>
                <div className="col-12 col-md-5 p-4 border rounded-3" style={{ background: "#EDEFF4" }}>
                    <form onSubmit={handleSubmit}>

                        <div className="ui divider"></div>
                        <div className="ui form">
                            <div className="field">
                                <label className="mt-2">First name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formValues.firstName}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="reg-ele">{formErrors.firstName}</p>
                            <div className="field">
                                <label className="mt-2">Last name</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formValues.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="reg-ele">{formErrors.lastName}</p>
                            <div className="field">
                                <label className="mt-2">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="reg-ele">{formErrors.email}</p>
                            <div className="field">
                                <label className="mt-2">Mobile</label>
                                <input
                                    className="form-control"
                                    type="tel"
                                    name="phoneNo"
                                    placeholder="Mobile number"
                                    value={formValues.phoneNo}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="reg-ele">{formErrors.phoneNo}</p>
                            <div className="field">
                                <label className="mt-2">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="pass"
                                    placeholder="pass"
                                    value={formValues.pass}
                                    onChange={handleChange}
                                />
                            </div>
                            <p className="reg-ele">{formErrors.pass}</p>
                            <div className="text-center">
                                <button className="btn btn-success mb-1 mt-2">Register</button>
                                <Link to="/login" className="text-info ">

                                    <button className="btn btn-primary mb-1 ms-5 mt-2">Go to Login</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div >
    );
}

export default Register;
























































































































// // import axios from "axios";
// import { useState, useEffect } from "react";
// import "./App.css";
// import { Link } from "react-router-dom";

// function Register() {
//     const initialValues = { fName: "", lName: "", email: "", mobNo: "", password: "" };
//     const [formValues, setFormValues] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//         setIsSubmit(true);

//         // if (isSubmit) {
//         //     const url = "http://localhost:8080/addUser";
//         //     const body = {
//         //         fName: formValues.fName,
//         //         lName: formValues.lName,
//         //         email: formValues.email,
//         //         mob: formValues.mobNo,
//         //         password: formValues.password,
//         //     };
//         //     await axios.post(url, body);
//         // }
//     };

//     useEffect(() => {
//         console.log(formErrors);
//         if (Object.keys(formErrors).length === 0 && isSubmit) {
//             console.log(formValues);
//         }
//     }, [formErrors]);
//     const validate = (values) => {
//         const errors = {};
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         const regex1 = /[3-9]/;
//         const regex3 = /^[a-zA-Z\\s]*$/i;
//         const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;


//         if (!values.email) {
//             errors.email = "Email is required!";
//         } else if (!regex.test(values.email)) {
//             errors.email = "This is not a valid email format!";
//         }

//         if (!values.mobNo) {
//             errors.mobNo = "mobNo is required!";
//         } else if (!regex2.test(values.mobNo)) {
//             errors.mobNo = "This is not a valid mobNo format!";
//         }

//         if (!values.password) {
//             errors.password = "Password is required!";
//         } else if (!regex1.test(values.password)) {
//             errors.password =
//                 "your password should have more than 3 digits and less than 9 digits";
//         }
//         return errors;
//     };

//     return (
//         <div className="container-fluid ">
//             {Object.keys(formErrors).length === 0 && isSubmit ? (
//                 <div className="ui message success">Registered in successfully</div>
//             ) : (
//                 <p>Fill following details to register !</p>
//             )}

//             <div className="row justify-content-center align-items-center bg-dark"
//                 style={{ height: "100vh" }}>
//                 <div className="col-12 col-md-5 p-4 border rounded-3" style={{ background: "#EDEFF4" }}>
//                     <form onSubmit={handleSubmit}>

//                         <div className="ui divider"></div>
//                         <div className="ui form">
//                             <div className="field">
//                                 <label className="mt-2">First name</label>
//                                 <input
//                                     className="form-control"
//                                     type="text"
//                                     name="fname"
//                                     placeholder="First name"
//                                     value={formValues.fName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             {/* <p>{formErrors.fName}</p> */}
//                             <div className="field">
//                                 <label className="mt-2">Last name</label>
//                                 <input
//                                     className="form-control"
//                                     type="text"
//                                     name="lname"
//                                     placeholder="Last name"
//                                     value={formValues.lName}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             {/* <p>{formErrors.lName}</p> */}
//                             <div className="field">
//                                 <label className="mt-2">Email</label>
//                                 <input
//                                     className="form-control"
//                                     type="text"
//                                     name="email"
//                                     placeholder="Email"
//                                     value={formValues.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{formErrors.email}</p>
//                             <div className="field">
//                                 <label className="mt-2">Mobile</label>
//                                 <input
//                                     className="form-control"
//                                     type="tel"
//                                     name="mobNo"
//                                     placeholder="Mobile number"
//                                     value={formValues.mobNo}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{formErrors.mobNo}</p>
//                             <div className="field">
//                                 <label className="mt-2">Password</label>
//                                 <input
//                                     className="form-control"
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     value={formValues.password}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <p>{formErrors.password}</p>
//                             <div className="text-center">
//                                 {/* <Link to="/login" className="text-info "> */}
//                                 <button className="btn btn-success mb-1 mt-2">Register</button>
//                                 {/* </Link> */}
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>

//         </div >
//     );
// }

// export default Register;