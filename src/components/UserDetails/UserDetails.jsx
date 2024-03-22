import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();

    const {userId} = useParams();
    console.log(userId);

    const handleGoBack = () =>{ 
        navigate('/users');
    }
    return (
        <div className="flex justify-center items-center card w-full h-full text-center">
            <div className="card-body">
                <p className='font-bold text-2xl'>Full Name: {user.name}</p>
                <p>Company Name: {user.company.name}</p>
                <p>City: {user.address.city}</p>
                <div className="card-actions justify-center items-center mt-5">
                    <button onClick={handleGoBack} className='btn btn-accent'>Go Back</button>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;