import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h1 className="flex flex-col justify-center items-center text-center text-5xl font-extrabold underline uppercase mt-32">
                OOPS!! {error.statusText || error.message}
            </h1>
        </div>
    );
};

export default ErrorPage;