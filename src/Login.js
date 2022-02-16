import axios from "axios";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import swal from "sweetalert";
import "./App.css";

function Login() {

    const loginactivity = (e) => {
        checkUser(user);
        e.preventDefault();

    };

    const checkUser = (user) => {
        axios.get("http://localhost:8080/getEmployee").then((response) => {
            // const userList = console.log(response.data);
            // console.log(userList);
            // console.log(response.data);
            // let email = response.data.email;
            // console.log(email);
            // let pass = response.data.pass;
            // console.log(pass);
            let r = response.data.length;
            // console.log(r);
            for (let i = 0; i < r; i++) {
                if (user.email == response.data[i].email && user.pass == response.data[i].pass) {
                    if (response.data[i].isAdmin === 1) {

                        sessionStorage.setItem("admin", "admin");
                        sessionStorage.setItem("firstName", response.data[i].firstName);
                        sessionStorage.setItem("lastName", response.data[i].lastName);
                        sessionStorage.setItem("phoneNo", response.data[i].phoneNo);
                        sessionStorage.setItem("email", response.data[i].email);
                        sessionStorage.setItem("empId", response.data[i].empId);
                        localStorage.setItem("empId", response.data[i].empId);
                        window.location = "/admin";
                    }
                    else if (response.data[i].isAdmin === 0) {
                        sessionStorage.setItem("username", response.data[i].name);
                        const userdata = {
                            name: response.data[i].firstName,
                            email: response.data[i].email
                        }
                        sessionStorage.setItem("userdata", JSON.stringify(userdata));
                        sessionStorage.setItem("email", response.data[i].email);
                        sessionStorage.setItem("empId", response.data[i].empId);
                        sessionStorage.setItem("firstName", response.data[i].firstName);
                        sessionStorage.setItem("lastName", response.data[i].lastName);
                        sessionStorage.setItem("phoneNo", response.data[i].phoneNo);
                        localStorage.setItem("empId", response.data[i].empId);
                        localStorage.setItem("user", response.data[i].email);
                        //window.location = "/home";
                        window.location = "/empPage"
                    }
                }
                else {
                    console.log("error");
                    swal({
                        icon: "error",
                        title: "Sorry",
                        text: "Incorrest username or password please try again",

                    })
                }
            }
        },
            (error) => {
                console.log(error);
                swal({
                    icon: "error",
                    title: "Sorry",
                    text: "There is an Error from Server",
                }
                );
            });
    }

    useEffect(() => {
        document.title = "Employee Management System";
    }, []);

    const [user, setUser] = useState({});
    return (

        <div className="container-fluid login">
            {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="ui message success">Registered in successfully</div>
        ) : (
            <p>Fill following details to register !</p>
        )} */}

            <div>
                <div className="row ">
                    <h1 className="bg-dark text-center text-light  p-2" style={{ height: "80px", fontSize: "40px", marginLeft: "0px" }}>Welcome to <b>OSP</b> Employee Management System</h1>
                </div>

                <div className="row justify-content-center align-items-center"
                    style={{ height: "100vh" }}>
                    <div className="col-8 col-md-4 p-4 border border-primary rounded" style={{ background: "#EDEFF4" }}>
                        <form onSubmit={loginactivity}>
                            <div className="field">
                                <label className="mt-2">Email</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                                // value={formValues.email}
                                // onChange={handleChange}
                                />
                            </div>
                            {/* <p>{formErrors.mobNo}</p> */}
                            <div className="field">
                                <label className="mt-2">Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) => { setUser({ ...user, pass: e.target.value }) }}
                                // value={formValues.password}
                                // onChange={handleChange}
                                />
                            </div>
                            {/* <p>{formErrors.password}</p> */}
                            <div className="text-center">
                                <button className="btn btn-primary ms-1 mt-3" type="submit" >Login</button>
                            </div>
                            <div className="text-center mb-0">
                                <p>if you are new</p>
                                <Link to="/register" className="text-info ">
                                    <button className="btn btn-warning">clich here to register !</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>

            </div >
        </div>
    );
}

export default Login;