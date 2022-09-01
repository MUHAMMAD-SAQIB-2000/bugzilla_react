import { useState } from "react"
import { useNavigate } from "react-router-dom";
import UsersSelect from "../users/UsersSelect";


const AddProject = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [user_id, setUserId] = useState(0);
    const [user_ids, setUserIds] = useState([]);
    const [numUsers, setNumUsers] = useState(1);

    const navigate = useNavigate();



    const addProject = (e) => {
        e.preventDefault();

        const user_id = 2;
        const user_projects_attributes = [];

        for (let i = 0; i < numUsers; i++) {
            const user_attr = { user_id: user_ids[i], _destroy: false }
            user_projects_attributes.push(user_attr)
        }

        const project = { user_id, name, description, user_projects_attributes };
        // console.log(project);

        if (user_ids.length >= 1){
            fetch('http://127.0.0.1:3000/api/v1/projects_api', {

            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)

        }).then((response) => {
            response.json().then((resp) => {
                console.log('Project Added, ID: ', resp.id)
                navigate(`/projects/${resp.id}`)
            })
        })
        } else {
            alert('Select At least One User');
            return;
        }

    }

    const getUserID = (user_id) => {
        setUserId(user_id);
        user_ids.push(parseInt(user_id));
        setUserIds(user_ids)
        // console.log(user_ids);
    }

    const users = [];

    for (var i = 0; i < numUsers; i += 1) {
        users.push(<UsersSelect key={i} getUserID={getUserID} />);
    };

    const onAddChild = (e) => {
        e.preventDefault();
        setNumUsers(numUsers + 1);
    }

    return (
        <div className="create">
            <h3>Add Project</h3>
            <form onSubmit={addProject}>
                <label>Project Name: </label><br />
                <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
                <br />

                <label>Project Description: </label><br />
                <textarea type="text" value={description} required onChange={(e) => setDescription(e.target.value)} />
                <br />

                <button>Add Project</button>&nbsp;&nbsp;


                <button onClick={onAddChild}>Add User</button>
                {users}
                {/* <UsersSelect  getUserID={getUserID} /> */}
                <p>{user_ids}</p>
            </form>
        </div>
    )
}

export default AddProject;
