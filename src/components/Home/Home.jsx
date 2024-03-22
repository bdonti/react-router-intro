import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <div className="flex flex-row justify-center items-center gap-10 container mx-auto ">
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                </div> : <div className="container mx-auto">
                <Outlet></Outlet>
            </div>
            }
        </div>
    );
};

export default Home;