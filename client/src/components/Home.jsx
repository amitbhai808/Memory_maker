import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-8">
      {/* Header Section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-4">Unlock Your Memory Potential!</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl text-center">
        Welcome to our Memory Training Game! Whether you're looking to improve your memory for school,
        work, or just for fun, we have a variety of engaging games designed to enhance your memory skills.
      </p>

      {/* Button to Memory Method */}
      <div className="mb-8">
        <Link to="/memory">
          <button className="bg-blue-600 text-white w-48 h-12 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
            Start Memory Training
          </button>
        </Link>
      </div>

<div className='flex flex-row-reverse'>
        {/* Memory Game Section */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Choose Your Memory Game Type:</h2>
        <p className="text-gray-500 mb-4">Select from our interactive memory games to get started:</p>
        <ul className="space-y-4">
            <Link to="/pegTable">
              <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
                <span className="font-bold text-xl text-gray-700">Remember Major System Table</span>
              </li>
            </Link>
          <Link to="/numberGame">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Numbers</span>
            </li>
          </Link>
          <Link to="/memory">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Words</span>
            </li>
          </Link>
          <Link to="/memory">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Flash Cards</span>
            </li>
          </Link>
          <Link to="/memory">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Images</span>
            </li>
          </Link>
          <Link to="/memory">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Names</span>
            </li>
          </Link>
        </ul>
      </div>

      {/* Memory Options Section */}
      <div className="bg-white shadow-md rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Choose Your Memory Method:</h2>
        <p className="text-gray-500 mb-4">Select from our interactive memory games to get started:</p>
        <ul className="space-y-4">
          <Link to="/memorycatelogue">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">MemoryCatelogue Method</span>
            </li>
          </Link>
          <Link to="/majorsystem">
            <li className='h-14 flex justify-center items-center bg-blue-100 rounded-lg transition-all hover:bg-blue-200 cursor-pointer'>
              <span className="font-bold text-xl text-gray-700">Major / Peg Method</span>
            </li>
          </Link>
          
        </ul>
      </div>
</div>


    </div>
  );
}