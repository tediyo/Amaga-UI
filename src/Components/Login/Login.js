import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-md" // Adjust width here
        style={{ minHeight: '320px' }} // Adjust height here
        >
      <h2 className="text-custom-lg font-medium leading-custom text-black mb-6 text-center">
               <span 
            className="relative inline-block" 
            style={{ borderBottom: '2px solid #4EA89E' }}
          >
            Welcome
                </span>
                <span className="ml-1">Back!</span>
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex justify-center">
             <button
             type="submit"
             className="text-white font-bold py-2 w-64 rounded-lg focus:outline-none focus:shadow-outline"
             style={{ backgroundColor: '#4EA89E' }}
               >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
