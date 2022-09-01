import React, { useState, useEffect } from "react";

const bugFetchUrl = "http://127.0.0.1:3000/api/v1/bugs_api/6";


const FetchBug = () => {

    const [bugData, setBugData] = useState({});

    useEffect(() => {
        getBugDataWithFetch();
    }, []);

    const getBugDataWithFetch = async () => {
        const response = await fetch(bugFetchUrl);
        const jsonData = await response.json();
        setBugData(jsonData);
    };

    return (
        <div>
            <header className="App-header">
                <h2>Fetching Bug Data</h2>
            </header>
            <div className="user-container">
                <h5 className="info-item">{bugData.title}</h5>
                <h5 className="info-item">{bugData.description}</h5>
                <h5 className="info-item">{bugData.bug_type}</h5>
                <h5 className="info-item">{bugData.bug_status}</h5>
                <h5 className="info-item">{bugData.deadline}</h5>
                <h5 className="info-item">User Id: {bugData.user_id}</h5>
                <h5 className="info-item">Project Id: {bugData.project_id}</h5>
                <h5 className="info-item">Assigned To: {bugData.assigned_to}</h5>
            </div>
        </div>
    )
}

export default FetchBug