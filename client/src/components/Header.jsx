// Header.js
import React from 'react';
import { Link, } from 'react-router-dom';



export default function Header() {
    return (
        <>
            <header className="bg-gray-800 text-white py-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Left Section */}
                    <div className="flex items-center space-x-4">
                        <Link to="/" className="text-2xl font-bold pr-10 hover:text-gray-400 transition-colors   border-b-4 border-red-50/80">Memory <span className='text-red-500'>Makers</span></Link>
                        <nav className="hidden md:flex space-x-6 font-semibold ">
                            <Link to="/" className="hover:text-gray-400  transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-gray-400  transition-colors">About</Link>
                            <Link to="/services" className="hover:text-gray-400  transition-colors">Services</Link>
                            <Link to="/contact" className="hover:text-gray-400  transition-colors">Contact</Link>
                        </nav>
                    </div>

                    {/* Middle Section */}
                    <div className="hidden md:flex flex-grow justify-end pr-7">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-1/2 p-2 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring focus:ring-indigo-400"
                        />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center space-x-4">
                        <Link to="/login" className="hover:text-gray-400 transition-colors">Login</Link>
                        <Link to="/signup" className="hover:text-gray-400 transition-colors">Sign Up</Link>
                    </div>
                </div>
            </header>
        </>
    );
}