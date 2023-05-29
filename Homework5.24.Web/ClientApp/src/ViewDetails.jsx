import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCandidateCountsContext } from "./CandidateCountsContext";


const ViewDetails = () => {

    const { refreshCounts } = useCandidateCountsContext()
    //const navigate = useNavigate();
    const { id } = useParams();
    const [pendingCandidate, setPendingCandidate] = useState({});
    const [isPending, setIsPending] = useState(true)

    const onConfirmCliclk = async () => {

        await axios.post('/api/candidate/updatestatus', { status: 'confirm', id })
        setIsPending(false)
        await refreshCounts()

    }

    const onDeclineCliclk = async () => {

        await axios.post('/api/candidate/updatestatus', { status: 'decline', id })
        setIsPending(false)
        await refreshCounts()

    }

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get(`/api/candidate/getcandidatebyid?id=${id}`);
            setPendingCandidate(data);
        }
        getCandidates()
    }, []);

    return <>

        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name:{pendingCandidate.firstName} {pendingCandidate.lastname}</h4>
                    <h4>Email:{pendingCandidate.email} </h4>
                    <h4>Phone:{pendingCandidate.phone}</h4>
                    <h4>Status:{pendingCandidate.registrationstatus}</h4>
                    <h4>Notes:</h4>
                    <p>{pendingCandidate.notes}</p>
                    {isPending &&
                        <div>
                            <button className="btn btn-primary" onClick={onConfirmCliclk}>Confirm</button>
                            <button className="btn btn-danger" onClick={onDeclineCliclk}>Decline</button>
                        </div>
                    }
                </div>
            </div>
        </div>


    </>
}

export default ViewDetails;