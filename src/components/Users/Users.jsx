import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1 className="text-center mt-6 font-extrabold text-4xl">Total Users: {users.length}</h1>
            <div className="grid grid-cols-3 items-center gap-6">
            {
             users.map(user => <User key={user.id}
             user={user}
             ></User>)   
            }
            </div>
        </div>
    );
};

export default Users;