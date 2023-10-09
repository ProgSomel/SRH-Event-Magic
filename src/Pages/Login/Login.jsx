// src/components/Login.js
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../firebase/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const {signInWithGoogle, singInWithEmail} = useContext(AuthContext)
    const navigate = useNavigate();


    const handleSignIn = (media) => {
        media()
        .then(res=>{
            toast.success('Successfully logged In')
            navigate('/')
        })
        .catch(err => {
            toast.error(err.message)
        })

    }

    const handleSignInWithEmail =(e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        singInWithEmail(email, password)
        .then(res => {
          toast.success('Successfully logged In. Redirecting to Home Page...')
          navigate('/');
        })
        .catch(err => {
          toast.error(err.message)
        })
    }

  return (
    <div className="flex  bg-gradient-to-r from-green-200 via-blue-100 to-green-100 py-9 ">
      <div className="m-auto">
        <div className="max-w-md w-full space-y-8 p-8 bg-orange-200 bg-opacity-80 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>
          <form onSubmit={handleSignInWithEmail} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-400"
                placeholder="Your email"
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
                Login
              </button>
              <p className='text-center mt-3'>Or continue With</p>
              <p onClick={()=> handleSignIn(signInWithGoogle)} className='flex justify-center mt-2 cursor-pointer'><FcGoogle></FcGoogle></p>
            </div>
          </form>
          <p className="text-gray-800 text-center text-sm">
            New user? <Link to="/register" className="text-blue-500">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
