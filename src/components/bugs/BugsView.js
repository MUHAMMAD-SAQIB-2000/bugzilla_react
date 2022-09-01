import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const bugsFetchUrl = "http://127.0.0.1:3000/api/v1/bugs_api/";
const BugsView = () => {

    const [bugs, setBugs] = useState([]);

    useEffect(() => {
        getBugsDataWithFetch();
    }, []);

    const getBugsDataWithFetch = async () => {
        fetch(bugsFetchUrl)
            .then(response => response.json()
                .then(bugs => {
                    setBugs(bugs)
                    console.log(bugs.length);
                })
            )
            .catch(error => console.log(error))
    };

    return (
        <div>
            <h3>All Bugs</h3>
            <ul>
                {
                    bugs.map(bug => {
                        // console.log(bug);
                        <Link to={`/bugs/${bug.id}`}>
                            <li value={bug.id}>{bug.title}</li>
                        </Link>
                    })
                }
            </ul>
        </div>
    )
}

export default BugsView