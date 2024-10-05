import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-10 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg leading-relaxed">
          We’d love to hear from you! Please fill out the form below or reach us via email or phone.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Additional Contact Information Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2"><strong>Email:</strong> info@memorymastery.com</p>
        <p className="mb-2"><strong>Phone:</strong> (123) 456-7890</p>
        <p className="mb-2"><strong>Address:</strong> 123 Memory Lane, Mind City, MC 12345</p>
      </section>
    </div>
  );
}