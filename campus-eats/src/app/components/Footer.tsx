'use client'

export default function Footer() {
  return (
      <footer className="bg-gray-800 text-white py-4 flex flex-row flex-wrap justify-around">
              <div className="flex flex-wrap content-center justify-evenly">
                  <div className="w-1/3 mb-6">
                      <h3 className="text-lg font-semibold mb-4">About Us</h3>
                      <p className="text-gray-400">
                          I simply made this site to learn how Next.js, React, Tailwind CSS, Typescript, and much more all work together. I've primarly worked
                          on vanilla HTML, CSS, and JS so this has been an amazing learning experience. I hope you enjoy the site and let me know what improvements to make!
                      </p>
                  </div>
                  <div className="w-1/3 mb-6 flex flex-col content-center">
                      <h3 className="text-lg font-semibold mb-4 text-center">Quick Links</h3>
                      <ul className="list-none text-center">
                          <li>
                              <a href="/" className="text-gray-300 hover:text-white text-center">Home</a>
                          </li>
                          <li>
                              <a href="/release-notes" className="text-gray-300 hover:text-white">Release Notes</a>
                          </li>
                          <li>
                              <a href="/contact" className="text-gray-300 hover:text-white">Contact</a>
                          </li>
                          <li>
                              <a href="/register" className="text-gray-300 hover:text-white">Sign Up</a>
                          </li>
                      </ul>
                  </div>
              </div>
              <div className="text-center text-gray-400 mt-8">
                  <p>&copy; {new Date().getFullYear()} Campus Eats. All rights reserved.</p>
              </div>
      </footer>
  );
}
