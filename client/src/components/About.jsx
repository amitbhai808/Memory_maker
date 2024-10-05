import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen p-8">
      {/* Hero Section */}
      <section className="bg-green-600 text-white p-10 rounded-lg shadow-lg mb-10">
        <h1 className="text-4xl font-bold mb-4">About Memory Mastery</h1>
        <p className="text-lg leading-relaxed">
          Memory Mastery is dedicated to helping you unlock the full potential of your mind. Explore powerful techniques to enhance your memory and boost your cognitive skills.
        </p>
      </section>

      {/* What is Memory Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">What is Memory?</h2>
        <p className="text-lg leading-relaxed">
          Memory is the cognitive ability to encode, store, and retrieve information. It forms the foundation of our personal identity and helps us make sense of the world. From recalling facts and events to learning new skills, memory is integral to how we think and act.
        </p>
      </section>

      {/* Conscious vs. Subconscious Mind */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Conscious vs. Subconscious Mind</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Conscious Mind</h3>
            <p className="leading-relaxed">
              The conscious mind is responsible for our active awareness and logical thinking. It's where decision-making, reasoning, and short-term memory processing occur. However, it can only hold a limited amount of information at once, making it essential to move data into long-term memory for efficient learning.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-700 mb-4">Subconscious Mind</h3>
            <p className="leading-relaxed">
              The subconscious mind operates below our conscious awareness, storing vast amounts of information, habits, and emotional responses. It plays a critical role in forming long-lasting memories and shapes behaviors that drive learning and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* How Memory Works */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">How Does Memory Work?</h2>
        <p className="text-lg leading-relaxed">
          Memory involves three essential processes: encoding, storage, and retrieval. Encoding transforms sensory input into a form the brain can process. Storage consolidates these encoded memories, while retrieval brings them back to conscious awareness when needed. Improving memory often requires strengthening these processes.
        </p>
      </section>

      {/* Tips & Tricks Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-green-600 mb-4">Tips & Tricks for Enhancing Memory</h2>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <span className="font-semibold">Visualize Information:</span> Use mental images to connect ideas. Visuals often improve retention and make recall easier.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Practice Spaced Repetition:</span> Regular review of information over spaced intervals helps consolidate memories in the long term.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Engage in Mindfulness:</span> Mindfulness practices improve focus and reduce stress, enhancing memory retention.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Stay Active:</span> Regular physical activity has been shown to boost brain function and improve memory.
          </li>
          <li className="mb-2">
            <span className="font-semibold">Get Plenty of Sleep:</span> Quality sleep is crucial for memory consolidation and overall cognitive health.
          </li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="bg-green-600 text-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Memory Journey with Us!</h2>
        <p className="leading-relaxed mb-6">
          Ready to take your memory to the next level? Explore our techniques, practice regularly, and unlock your true potential.
        </p>
        <button className="bg-white text-green-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition-colors">
          Join Now
        </button>
      </section>
    </div>
  );
}