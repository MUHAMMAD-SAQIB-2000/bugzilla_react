import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const allProjectsFetchUrl = "http://127.0.0.1:3000/api/v1/projects_api/";

const ProjectsView = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getAllProjectsWithFetch();
    }, []);

    const getAllProjectsWithFetch = async () => {
        fetch(allProjectsFetchUrl)
            .then(response => response.json())
            .then(projects => {
                console.log(projects);
                setProjects(projects)
                
            })
            .catch(error => console.log(error))
    };

    return (
        // <div>{JSON.stringify(projects, null, 4)}</div>
        <div>
            <ul>
            {              
                projects.map(project => (
                    <Link to={`/projects/${project.id}`}>
                        <li value={project.id}>{project.name}</li>
                    </Link>
                    // <ProjectDetails key={project.id} projectData={project} />
                ))
            }
            </ul>
        </div>

    )
}

export default ProjectsView