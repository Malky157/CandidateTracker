import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Pending = () => {
    const [pendingCandidates, setPendingCandidates] = useState([]);

    const buildRows = () => {
        {
            return pendingCandidates.map((c) => {
                return <>
                    <tr>
                        <td>
                            <Link to={`/viewdetails/${c.id}`} >View Details
                            </Link>
                        </td>
                        <td>{c.firstName}</td>
                        <td>{c.lastName}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                    </tr>
                </>
            })
        }
    }
    useEffect(() => {
        const getCandidates = async () => {
            const { data } = await axios.get('api/candidate/getpendingcandidates')
            setPendingCandidates(data)
        }
        getCandidates()
    }, []);
    return <>
        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th>
                    </th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {buildRows()}
            </tbody>
        </table>
    </>
}

export default Pending