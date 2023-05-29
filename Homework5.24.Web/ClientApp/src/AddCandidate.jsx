import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCandidateCountsContext } from "./CandidateCountsContext";

const AddCandidate = () => {

    const { refreshCounts } = useCandidateCountsContext()
    const navigate = useNavigate();

    const [candidate, setCandidate] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        notes: ''
    })
    const onSubmitClick = async () => {
        await axios.post('api/Candidate/addcandidate', candidate)
        await refreshCounts()
        navigate('/')
    }

    const onTextChange = (e) => {
        const candidateCopy = { ...candidate }
        candidateCopy[e.target.name] = e.target.value
        setCandidate(candidateCopy)
    }
    return <>
        <div className="row" style={{ marginTop: 20 }}>
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>

                    <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={onTextChange} value={candidate.firstName} />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={onTextChange} value={candidate.lastName} />
                    <br />
                    <input type="text" name="email" placeholder="Email" className="form-control" onChange={onTextChange} value={candidate.email} />
                    <br />
                    <input type="text" name="phone" placeholder="Phone Number" className="form-control" onChange={onTextChange} value={candidate.phone} />
                    <br />
                    <textarea rows="5" className="form-control" name="notes" onChange={onTextChange} value={candidate.notes}>
                    </textarea>
                    <br />
                    <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>

                </div>
            </div>
        </div>
    </>
}

export default AddCandidate;