import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link to="/" className="mt-6 btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
