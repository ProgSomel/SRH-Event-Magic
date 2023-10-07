import { Link } from "react-router-dom";

const Registration = () => {
    return (
        <div className="flex  bg-gradient-to-r from-green-200 via-blue-100 to-green-100 py-9 ">
        <div className="m-auto">
          <div className="max-w-md w-full space-y-8 p-8 bg-orange-200 bg-opacity-80 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-center text-gray-800">Register</h2>
            <form  className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-800">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="photoURL" className="block text-gray-800">Photo URL</label>
                <input
                  type="text"
                  id="photoURL"
                  name="photoURL"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your photoURL"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-800">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-gray-800">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                  placeholder="Your password"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="mt-4 w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
                >
                  Register
                </button>
                
              </div>
            </form>
            <p className="text-gray-800 text-center text-sm">
              Already Member? <Link to="/login" className="text-blue-500 underline">Login</Link>
            </p>
          </div>
        </div>
      </div>
    
    )

};

export default Registration;