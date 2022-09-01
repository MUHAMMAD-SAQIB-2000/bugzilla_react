import { useState } from "react"
import { useNavigate } from "react-router-dom";
import UsersSelect from "../users/UsersSelect";
import React from 'react'
import ProjectSelect from "../projects/ProjectSelect";

const AddBug = () => {

  const [assigned_to, setAssignedTo] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');
  const [bugType, setBugType] = useState('');
  const [bugStatus, setBugStatus] = useState('');
  const [project_id, setProjectId] = useState('');

  const navigate = useNavigate();

  const addBug = (e) => {
    e.preventDefault();
    const user_id = 3;
    const bug = { title, description, deadline, bugType, bugStatus, assigned_to, user_id, project_id }
    console.log(bug);

    fetch('http://127.0.0.1:3000/api/v1/bugs_api', {

      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bug)

    }).then((response) => {
      response.json().then((resp) => {
        console.log('Bug Added, ID: ', resp.id)
        navigate(`/bugs/${resp.id}`)
      })
    })
  }

  const getUserID = (user_id) => {
    setAssignedTo(user_id);
  }

  const getProjectID = (project_id) => {
    setProjectId(project_id);
    console.log(project_id);
  }

  return (
    <div className="create">
      <h3>Add Bug</h3>
      <form onSubmit={addBug}>
        <label>Bug Title: </label><br />
        <input type="text" value={title} required onChange={(e) => setTitle(e.target.value)} />
        <br />

        <label>Bug Description: </label><br />
        <textarea type="text" value={description} required onChange={(e) => setDescription(e.target.value)} />
        <br />

        <label>Bug Deadline: </label><br />
        <input type="date" value={deadline} required onChange={(e) => { setDeadline(e.target.value) }} />
        <br />

        <UsersSelect getUserID={getUserID} />

        <ProjectSelect getProjectID={getProjectID} />

        <div>
          <label>Select Bug Type</label>
          <select name="bugType" onChange={(e) => setBugType(e.target.value)}>
            <option disabled selected>Select Bug Type</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
          </select>
        </div>
        <br />

        <div>
          <label>Select Bug Status</label>
          <select name="bugStatus" onChange={(e) => setBugStatus(e.target.value)}>
            <option disabled selected>Select Bug Status</option>
            <option value="New">New</option>
            <option value="Started">Started</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <br />

        <button>Add Bug</button>&nbsp;&nbsp;

      </form>
    </div>
  )
}

export default AddBug