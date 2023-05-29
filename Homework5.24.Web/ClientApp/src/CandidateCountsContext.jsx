import React, { useState, useEffect, createContext, useContext } from "react";
import axios from "axios";

const CandidatCountsContext = createContext();

const CandidatCountsContextComponent = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [declinedCount, setDeclinedCount] = useState(0);


    const refreshCounts = async () => {
        const { data } = await axios.get('/api/Candidate/getcandidatecounts')
        setPendingCount(data[0])
        setConfirmedCount(data[1])
        setDeclinedCount(data[2])
    }

    useEffect(() => {
        refreshCounts()
    }, []);

    return <>
        <CandidatCountsContext.Provider value={{ pendingCount, setPendingCount, confirmedCount, setConfirmedCount, declinedCount, setDeclinedCount, refreshCounts }}>
            {children}
        </CandidatCountsContext.Provider>
    </>
}
const useCandidateCountsContext = () => {
    return (useContext(CandidatCountsContext))
}
export { CandidatCountsContextComponent, useCandidateCountsContext };