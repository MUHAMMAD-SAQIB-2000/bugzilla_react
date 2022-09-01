import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProjectDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [projectData, setProjectData] = useState({});

    const projectFetchUrl = `http://127.0.0.1:3000/api/v1/projects_api/${id}`;

    useEffect(() => {
        getProjectDataWithFetch();
    }, []);

    const getProjectDataWithFetch = async () => {
        fetch(projectFetchUrl)
            .then(response => {
                response.json().then((resp) => {
                    setProjectData(resp)
                })
            })
            .catch(error => console.log(error))
    };

    const deleteProject = (e) => {
        console.log(e.target.value);
        fetch(`http://127.0.0.1:3000/api/v1/projects_api/${e.target.value}`, {
            method: 'DELETE'
        }).then(() => {
            console.log('Delete successful');
        });
        navigate('/')
    }

    return (
        <div>
            <header className="App-header">
                <h2>Project Data</h2>
            </header>
            <div className="user-container">
                <p>Click Project Name to Edit it</p>
                <p className="info-item">Project Id:   {projectData.id}</p>
                <p className="info-item">Project Name: &nbsp;
                    <Link to={`/editProject/${projectData.id}`}>
                        {projectData.name}
                    </Link>
                </p>
                <p className="info-item">Project Desc: {projectData.description}</p>
                <button value={projectData.id} onClick={deleteProject}>
                    Delete Project ID: {projectData.id}
                </button>
            </div>
        </div>
    )
}

export default ProjectDetails