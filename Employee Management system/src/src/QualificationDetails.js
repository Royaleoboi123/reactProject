import axios from "axios";
import { useEffect, useState } from "react";
import Navbar1 from "./Navbar";

function QualificationDetails() {

    const userId = sessionStorage.getItem("empId");
    const initialValuesQualification = { degree: "", gradPercent: "", yearOfPassing: "", hscPercent: "", hscPassingYear: "", sscPercent: "", sscPassingYear: "" };
    const [qualificationValues, setQualificationValues] = useState(initialValuesQualification);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQualificationValues({ ...qualificationValues, [name]: value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            degree: qualificationValues.degree,
            gradPercent: qualificationValues.gradPercent,
            yearOfPassing: qualificationValues.yearOfPassing,
            hscPercent: qualificationValues.hscPercent,
            hscPassingYear: qualificationValues.hscPassingYear,
            sscPercent: qualificationValues.sscPercent,
            sscPassingYear: qualificationValues.sscPassingYear

        }
        const url = `http://localhost:8080/addQualificationDetails/${userId}`;
        const list = await axios.post(url, data);
        alert(list.data);
        console.log(list.data);

        //console.log("data" + data);
        // console.log(123);
    }

    useEffect(() => {
        document.title = "Add QualificationDetails";
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
            <div className="container-fluid" style={{ backgroundColor: "#DDC5E7" }} >
                <Navbar1 />
                <div className="row justify-content-center align-items-center" >
                    <div className="col-0 col-3" style={{ height: "100vh" }} >
                    </div>
                    <div className="col-12 col-md-6 rounded" style={{ backgroundColor: "#E9EAEC" }}>
                        <div className="row justify-content-center align-items-center" style={{}}>
                            <form onSubmit={handleSubmit} >
                                <div className="p-4 ms-5 me-5">
                                    <h2 className="mb-3 text-center">Qualification details</h2>
                                    <div className="mt-3">
                                        <label className="mt-2">Graduction</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            name="degree"
                                            placeholder="Graduation details"
                                            value={qualificationValues.degree}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Graduation percent</label>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="gradPercent"
                                            placeholder="Degree %"
                                            value={qualificationValues.gradPercent}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">Graduation passing year</label>
                                        <input
                                            className="form-control "
                                            type="number"
                                            name="yearOfPassing"
                                            placeholder="Degree passing year"
                                            value={qualificationValues.yearOfPassing}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">HSC/Diploma percent</label>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="hscPercent"
                                            placeholder="HSC/Diploma %"
                                            value={qualificationValues.hscPercent}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">HSC/Diploma passing year</label>
                                        <input
                                            className="form-control "
                                            type="number"
                                            name="hscPassingYear"
                                            placeholder="HSC/diploma passing year"
                                            value={qualificationValues.hscPassingYear}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">SSC percent</label>
                                        <input
                                            className="form-control "
                                            type="text"
                                            name="sscPercent"
                                            placeholder="SSC %"
                                            value={qualificationValues.sscPercent}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <label className="mt-2">SSC passing year</label>
                                        <input
                                            className="form-control "
                                            type="number"
                                            name="sscPassingYear"
                                            placeholder="SSC passing year"
                                            value={qualificationValues.sscPassingYear}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <button className="btn btn-primary  mt-5">
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="col-0 col-3" >

                    </div>
                </div>
            </div>
        </>
    );
}

export default QualificationDetails;