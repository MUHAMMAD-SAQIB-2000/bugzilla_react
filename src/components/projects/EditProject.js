import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

const EditProject = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [projectData, setProjectData] = useState({});
  const [name, setName] = useState(projectData.name);
  const [description, setDescription] = useState(projectData.description);

  const projectFetchUrl = `http://127.0.0.1:3000/api/v1/projects_api/${id}`;

  useEffect(() => {
    getProjectDataWithFetch();
  }, []);

  const getProjectDataWithFetch = async () => {
    fetch(projectFetchUrl)
      .then(response => {
        response.json().then((resp) => {
          // console.log(resp);

          setName(resp.name)
          setDescription(resp.description)
          setProjectData(resp)
        })
        // console.log(projectData);
      })
      .catch(error => console.log(error))
  };

  const updateProjectDetails = (e) => {
    e.preventDefault();
    const user_id = 2;

    const project = { user_id, name, description };
    // console.log(project);


    fetch(projectFetchUrl, {

      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)

    }).then(() => {

      console.log('Project Updated');
      navigate(`/projects/${projectData.id}`)

    }).catch(error => console.log("Update Un Successful, No Redirects"))
  }

  return (
    <div>
      <div className="create">
        <h3>Update Project</h3>
        <form onSubmit={updateProjectDetails}>
          <label>Project Name: </label><br />
          <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
          <br />

          <label>Project Description: </label><br />
          <textarea type="text" value={description} required onChange={(e) => setDescription(e.target.value)} />
          <br />

          <button>Update Project</button>&nbsp;&nbsp;


          {/* <button onClick={onAddChild}>Add User</button> */}
          {/* {users} */}
          {/* <UsersSelect  getUserID={getUserID} /> */}
          {/* <p>{user_ids}</p> */}
        </form>
      </div>
    </div>

  )
}

export default EditProject