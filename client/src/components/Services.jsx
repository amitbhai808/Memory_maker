import React from 'react';

export default function Services() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white p-10 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg leading-relaxed">
          At Memory Mastery, we offer a variety of services designed to help you unlock your cognitive potential and improve your memory. Explore our offerings and find the perfect fit for your needs!
        </p>
      </section>

      {/* Memory Workshops Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Memory Workshops</h2>
        <p className="text-lg leading-relaxed mb-4">
          Join our interactive workshops led by memory experts! Each session covers proven techniques and exercises that enhance memory retention and recall. Perfect for students, professionals, and anyone looking to improve their memory skills.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Engaging group activities</li>
          <li className="mb-2">Hands-on memory techniques</li>
          <li className="mb-2">Personalized feedback</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
          Learn More
        </button>
      </section>

      {/* One-on-One Coaching Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">One-on-One Coaching</h2>
        <p className="text-lg leading-relaxed mb-4">
          Our one-on-one coaching sessions provide tailored guidance to suit your individual needs. Work closely with our memory coaches to develop a personalized plan for memory enhancement.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Customized strategies for your goals</li>
          <li className="mb-2">Flexible scheduling</li>
          <li className="mb-2">Support and accountability</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
          Book a Session
        </button>
      </section>

      {/* Online Courses Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Online Courses</h2>
        <p className="text-lg leading-relaxed mb-4">
          Our comprehensive online courses cover a variety of memory techniques, cognitive strategies, and mental exercises. Accessible at your convenience, you can learn at your own pace from the comfort of your home.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Video tutorials and interactive content</li>
          <li className="mb-2">Quizzes and assessments</li>
          <li className="mb-2">Lifetime access to course materials</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
          Explore Courses
        </button>
      </section>

      {/* Memory Enhancement Tools Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Memory Enhancement Tools</h2>
        <p className="text-lg leading-relaxed mb-4">
          Discover our range of tools designed to support your memory improvement journey. From apps that utilize spaced repetition to physical memory aids, we provide resources that cater to various learning styles.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Memory training apps</li>
          <li className="mb-2">Flashcards and workbooks</li>
          <li className="mb-2">Guided meditation for focus</li>
        </ul>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
          View Tools
        </button>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Transform Your Memory Today!</h2>
        <p className="leading-relaxed mb-6">
          Ready to unlock your memory potential? Explore our services and start your journey toward enhanced cognitive abilities.
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition-colors">
          Get Started
        </button>
      </section>
    </div>
  );
}