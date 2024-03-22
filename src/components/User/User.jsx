import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const navigate = useNavigate();

    const handleShowDetail = () =>{
        navigate(`/user/${id}`)
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">User Info Number {id}</h2>
                <p className='font-bold text-2xl'>{name}</p>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <div className="card-actions justify-center items-center mt-5">
                    <Link to={`/user/${id}`} className="btn btn-primary">Show Details</Link>
                </div>
                <div className="card-actions justify-center items-center mt-5">
                    <button className='btn btn-accent' onClick={handleShowDetail}>Show Detail</button>
                </div>
            </div>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
};

export default User;