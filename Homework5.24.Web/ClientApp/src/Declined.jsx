import axios from "axios";
import React, { useState, useEffect } from "react";

const Declined = () => {
    const [declinedCandidates, setDeclinedCandidates] = useState([])
    const [toggleNotes, setToggleNotes] = useState(true)
    const buildRows = () => {

        {
          return  declinedCandidates.map((candidate) => {
                return <>
                    <tr>
                        <td>{candidate.firstName}</td>
                        <td>{candidate.lastName}</td>
                        <td>{candidate.phone}</td>
                        <td>{candidate.email}</td>
                        {!!toggleNotes &&
                            <td>{candidate.notes}</td>}
                    </tr>
                </>
            })
        }
    }

    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('api/candidate/getdeclinedcandidates')
            setDeclinedCandidates(data)
        }
        getCandidates()
    }, []);
    const onToggle = () => {
        setToggleNotes(!toggleNotes);
    }
    return <>
        <div>
            <h1>Declined</h1>
            <div>
                <button className="btn btn-success" onClick={onToggle}>Toggle Notes</button>
                <table className="table table-hover table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {!!toggleNotes &&
                                <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {buildRows()}
                    </tbody>
                </table>
            </div>
        </div>
    </>
}
export default Declined;