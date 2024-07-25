import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State for input values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // State for errors
  const [errors, setErrors] = useState({ username: '', password: '' });

  // Hook from react-router-dom to handle navigation
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'username') {
      setUsername(value);
    } else if (id === 'password') {
      setPassword(value);
    }
  };

  // Validate form
  const validate = () => {
    const newErrors = { username: '', password: '' };
    let isValid = true;

    if (username.trim() === '') {
      newErrors.username = 'Username is required';
      isValid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const hardcodedUsername = 'admin';
      const hardcodedPassword = 'password123';

      if (username === hardcodedUsername && password === hardcodedPassword) {
        // Store a token or a flag in localStorage to indicate the user is logged in
        localStorage.setItem('authToken', 'some-auth-token');

        // Redirect to the history page
        navigate('/exchange');
      } else {
        alert('Invalid username or password');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="bg-white p-10 rounded-lg shadow-md w-full max-w-lg h-[350px]" // Adjusted width and height
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
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.username && (
              <p className="text-red-500 text-xs italic">{errors.username}</p>
            )}
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white font-bold py-2 px-6 rounded-lg w-full max-w-xs focus:outline-none focus:shadow-outline"
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
