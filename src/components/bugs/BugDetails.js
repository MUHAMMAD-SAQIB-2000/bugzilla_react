import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BugDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [bugData, setBugData] = useState({});

    const bugFetchUrl = `http://127.0.0.1:3000/api/v1/bugs_api/${id}`;

    useEffect(() => {
        getBugDataWithFetch();
    }, []);

    const getBugDataWithFetch = async () => {
        fetch(bugFetchUrl)
            .then(response => {
                response.json().then((resp) => {
                    setBugData(resp)
                })
            })
            .catch(error => console.log(error))
    };

    const deleteBug = (e) => {
        console.log(e.target.value);
        fetch(`http://127.0.0.1:3000/api/v1/bugs_api/${e.target.value}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('Delete successful');
        });
        navigate('/')
    }

    return (
        <div>
            <header className="App-header">
                <h2>Bug Data</h2>
            </header>
            <div className="user-container">
                <p>Click Bug Name to Edit it</p>
                <p className="info-item">Bug Id:   {bugData.id}</p>
                <p className="info-item">Bug Title: &nbsp;
                    <Link to={`/editBug/${bugData.id}`}>
                        {bugData.title}
                    </Link>
                </p>
                <p className="info-item">Bug Desc: {bugData.description}</p>
                <button value={bugData.id} onClick={deleteBug}>
                    Delete Bug ID: {bugData.id}
                </button>
            </div>
        </div>
    )
}

export default BugDetails