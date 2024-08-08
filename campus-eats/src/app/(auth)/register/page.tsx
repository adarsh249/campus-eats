import { signup } from './actions'

export default function RegisterPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <img 
        src="assets/images/login-page-photo.jpg" 
        alt="Login page photo" 
        className="hidden md:block md:w-1/2 object-cover"
      />
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 bg-gray-50">
        <form className="w-full max-w-sm">
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Sign Up:</h2>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-600 mb-2">Username:</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 mb-2">Confirm Password:</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            formAction={signup}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}
