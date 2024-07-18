'use client'

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white text-black">
      <h1 className="text-2xl font-bold">Campus Eats</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/login" className="hover:text-gray-300">Login</a></li>
          <li><a href="/register" className="hover:text-gray-300">Sign Up</a></li>
        </ul>
      </nav>
    </header>
  );
}
