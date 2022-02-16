import axios from "axios";
import { useEffect, useState } from "react";
import Navbar1 from "./Navbar";



function PermanentAddress() {
    const userId = sessionStorage.getItem("empId");
    const initialValuespermanent = { address: "", city: "", state: "", pinCode: "" };
    const [permanentValues, setPermanentValues] = useState(initialValuespermanent);

    //const [permanentErrors, setpermanentErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPermanentValues({ ...permanentValues, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        //setpermanentErrors(validate(permanentValues));
        //setIsSubmit(true);
        //console.log(123);
        // console.log(typeof formErrors);
        // console.log(validate(formValues));
        // console.log(formValues);
        let data = {
            address: permanentValues.address,
            city: permanentValues.city,
            state: permanentValues.state,
            pinCode: permanentValues.pinCode
        }
        const url = `http://localhost:8080/addPermanentaddress/${userId}`;
        const list = await axios.post(url, data);
        alert(list.data);
        //console.log("data" + data);
        // console.log(123);
    }
    const initialValuesemergency = { phone: "", relation: "", address: "", city: "", state: "", pinCode: "" };
    const [emergencyValues, setemergencyValues] = useState(initialValuesemergency);
    const handleChange1 = (e) => {
        const { name, value } = e.target;
        setemergencyValues({ ...emergencyValues, [name]: value });
    };
    const handleSubmit1 = async (e) => {
        e.preventDefault();
        //setpermanentErrors(validate(permanentValues));
        //setIsSubmit(true);
        //console.log(123);
        // console.log(typeof formErrors);
        // console.log(validate(formValues));
        // console.log(formValues);
        let data = {
            phone: emergencyValues.phone,
            relation: emergencyValues.relation,
            address: emergencyValues.address,
            city: emergencyValues.city,
            state: emergencyValues.state,
            pinCode: emergencyValues.pinCode
        }

        const url = `http://localhost:8080/addEmergencyAddress/${userId}`;
        const list = await axios.post(url, data);
        alert(list.data);
        //console.log("data" + data);
        // console.log(123);
    }
    useEffect(() => {
        document.title = "Address";
        if (sessionStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        } else if (localStorage.getItem("empId") == null) {
            alert("please login to stay on this page")
            window.location = "/Login";
        }
    }, []);

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

    // useEffect(() => {
    //     console.log(permanentErrors);
    //     if (Object.keys(permanentErrors).length === 0 && isSubmit) {
    //         console.log(permanentValues);
    //     }
    // }, [permanentErrors]);

    // useEffect(() => {
    //     console.log(formErrors);
    //     if (Object.keys(formErrors).length === 0 && isSubmit) {
    //         console.log(formValues);
    //     }
    // }, [formErrors]);

    // const validate = (values) => {
    //     const errors = {};
    //     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    //     //const regex1 = /[3-9]/;
    //     const regex4 = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/;
    //     const regex3 = /^[a-zA-Z\\s]*$/i;
    //     const regex2 = /^((\+)?(\d{2}[-]))?(\d{10}){1}?$/i;


    //     if (!values.address) {
    //         errors.address = "address is required!";
    //     }

    //     if (!values.city) {
    //         errors.city = "city is required!";
    //     } else if (!regex3.test(values.city)) {
    //         errors.city = "This is not a valid city format!";
    //     }

    //     if (!values.state) {
    //         errors.state = "state is required!";
    //     } else if (!regex.test(values.state)) {
    //         errors.state = "This is not a valid state format!";
    //     }

    //     if (!values.pinCode) {
    //         errors.pinCode = "pincode is required!";
    //     } else if (!regex4.test(values.pinCode)) {
    //         errors.pinCode = "This is not a valid pincode format!";
    //     }
    // };

    return (
        // <div className="container-fluid ">
        //     {Object.keys(permanentErrors).length === 0 && isSubmit ? (
        //         <div className="ui message success">Permanent Address successfully Registered</div>
        //     ) : (
        //         <p>Please Fill following details !</p>
        //     )}
        <div className="container-fluid"
            style={{ height: "100vh", backgroundColor: "#E9EAEC" }}>

            <Navbar1 />
            <div className="row">
                <div className="col-12 col-md-6" style={{ height: "100vh", backgroundColor: "#E9EAEC" }} >

                    <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>

                        <form onSubmit={handleSubmit} >
                            <div className="p-4 ms-5 me-5">
                                <h1 className="mb-5">Address details...</h1>
                                <h2>Permanent Address</h2>
                                <div className="mt-3 mb-3">
                                    <label className="mt-2">Address</label>
                                    <textarea
                                        className="form-control"
                                        cols="30"
                                        rows="5"
                                        name="address"
                                        value={permanentValues.address}
                                        placeholder="Enter your plot no/building(flat no.) and landmark etc."
                                        // value={formValues.fName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-3">
                                    <label className="mt-2">City</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="city"
                                        value={permanentValues.city}
                                        placeholder="City"
                                        // value={formValues.fName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-3">
                                    <label className="mt-2">State</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="state"
                                        value={permanentValues.state}
                                        placeholder="State"
                                        // value={formValues.fName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-3">
                                    <label className="mt-2">Pin-code</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="pinCode"
                                        value={permanentValues.pinCode}
                                        placeholder="Pin-code"
                                        // value={formValues.fName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-primary">
                                        Confirm Permenent address
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-6" style={{ backgroundColor: "#E9EAEC", height: "100vh" }}>
                    <div className="row justify-content-center align-items-center" style={{}}>
                        <form onSubmit={handleSubmit1} >
                            <div className="p-4 ms-5 me-5">
                                <h2>Emergency Address</h2>
                                <div className="mt-3">
                                    <label className="mt-2">Contact Number</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        name="phone"
                                        placeholder="Contact Number"
                                        value={emergencyValues.phone}
                                        onChange={handleChange1}
                                    />
                                </div>
                                <div className="mt-3">
                                    <label className="mt-2">Relationship</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="relation"
                                        placeholder="Relation with the person"
                                        value={emergencyValues.relation}
                                        onChange={handleChange1}
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <label className="mt-2">Address</label>
                                    <textarea
                                        className="form-control "
                                        cols="30"
                                        rows="5"
                                        name="address"
                                        placeholder="Enter your plot no/building(flat no.) and landmark etc."
                                        value={emergencyValues.address}
                                        onChange={handleChange1}
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <label className="mt-2">City</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={emergencyValues.city}
                                        onChange={handleChange1}
                                        required
                                    />
                                </div>
                                <div className="mt-3">
                                    <label className="mt-2">State</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={emergencyValues.state}
                                        onChange={handleChange1}
                                        required
                                    />
                                </div>
                                <div className="mt-3 mb-3">
                                    <label className="mt-2">Pin-code</label>
                                    <input
                                        className="form-control "
                                        type="number"
                                        name="pinCode"
                                        placeholder="Pin-code"
                                        value={emergencyValues.pinCode}
                                        onChange={handleChange1}
                                        required
                                    />
                                </div>
                                <div>
                                    <button className="btn btn-primary">
                                        Confirm Emergency address
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </div >
    );
}
export default PermanentAddress;

























































// function PermanentAddress() {
//     return (
//         <div className="container-fluid"
//             style={{ height: "100vh" }}>
//             <div className="row">
//                 <div className="col-12 col-md-6 bg-primary bg-opacity-25">
//                     <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>

//                         <form action="" >
//                             <div className="p-4 ms-5 me-5">
//                                 <h1 className="mb-5">Address details...</h1>
//                                 <h2>Permanent Address</h2>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Address</label>
//                                     <textarea
//                                         className="form-control"
//                                         cols="30"
//                                         rows="5"
//                                         name="address"
//                                         placeholder="Enter your plot no/building(flat no.) and landmark etc."
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">City</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="city"
//                                         placeholder="City"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">State</label>
//                                     <input
//                                         className="form-control "
//                                         type="text"
//                                         name="state"
//                                         placeholder="State"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Pin-code</label>
//                                     <input
//                                         className="form-control"
//                                         type="number"
//                                         name="pincode"
//                                         placeholder="Pin-code"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//                 <div className="col-12 col-md-6 bg-primary bg-opacity-25">
//                     <div className="row justify-content-center align-items-center" style={{ height: "100vh" }}>
//                         <form action="" >
//                             <div className="p-4 ms-5 me-5">
//                                 <h2>Emergency Address</h2>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Contact Number</label>
//                                     <input
//                                         className="form-control"
//                                         type="number"
//                                         name="number1"
//                                         placeholder="Contact Number"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Relationship</label>
//                                     <input
//                                         className="form-control "
//                                         type="text"
//                                         name="relation"
//                                         placeholder="Relation with the person"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Address</label>
//                                     <textarea
//                                         className="form-control "
//                                         cols="30"
//                                         rows="5"
//                                         name="address1"
//                                         placeholder="Enter your plot no/building(flat no.) and landmark etc."
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">City</label>
//                                     <input
//                                         className="form-control "
//                                         type="text"
//                                         name="city"
//                                         placeholder="City"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">State</label>
//                                     <input
//                                         className="form-control"
//                                         type="text"
//                                         name="state"
//                                         placeholder="State"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>
//                                 <div className="mt-3 mb-3">
//                                     <label className="mt-2">Pin-code</label>
//                                     <input
//                                         className="form-control "
//                                         type="number"
//                                         name="pincode"
//                                         placeholder="Pin-code"
//                                     // value={formValues.fName}
//                                     // onChange={handleChange}
//                                     />
//                                 </div>

//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PermanentAddress;