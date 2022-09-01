import { useEffect, useState } from "react";


const UsersSelect = (props) => {

    const usersFetchUrl = "http://127.0.0.1:3000/api/v1/users_api";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsersDataWithFetch();
    }, []);

    const getUsersDataWithFetch = async () => {
        fetch(usersFetchUrl)
            .then(response => response.json())
            .then(users => {
                setUsers(users)
            })
            .catch(error => console.log(error))
    };

    const getSelectedUser = (e) => {
        props.getUserID(e.target.value)
    }

    return (
        <div>
            <label>Select User</label>

            <select onChange={getSelectedUser}>
                <option disabled selected>Select Users</option>
                {users.map((user, index) => (
                    <option key={index} value={user.id}>
                        {user.name}
                    </option>
                ))}
            </select>

            <br />
        </div>
    )
}

export default UsersSelect