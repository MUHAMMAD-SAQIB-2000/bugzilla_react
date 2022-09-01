import { useEffect, useState } from "react";


const ProjectSelect = (props) => {

    const projectsFetchUrl = "http://127.0.0.1:3000/api/v1/projects_api";
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getProjectsDataWithFetch();
    }, []);

    const getProjectsDataWithFetch = async () => {
        fetch(projectsFetchUrl)
            .then(response => response.json())
            .then(projects => {
                setProjects(projects)
            })
            .catch(error => console.log(error))
    };

    const getSelectedProject = (e) => {
        props.getProjectID(e.target.value)
    }

    return (
        <div>
            <label>Select Project</label>

            <select onChange={getSelectedProject}>
                <option disabled selected>Select Projects</option>
                {projects.map((project, index) => (
                    <option key={index} value={project.id}>
                        {project.name}
                    </option>
                ))}
            </select>

            <br />
        </div>
    )
}

export default ProjectSelect