import { useState } from 'react';
import HolographicPanel from './HolographicPanel';  // Import the HolographicPanel component

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate email service like EmailJS or backend API here
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' }); // Clear form after submit
  };

  return (
    <div className="relative">
      {/* Background Holographic Panel */}
      <HolographicPanel title="Contact Form" content="Send me a message!" />

      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg max-w-lg mx-auto relative z-10"
      >
        <h2 className="text-cyan-400 text-2xl font-bold mb-4 text-center">Contact Me</h2>

        <div className="mb-4">
          <label className="block text-white mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 rounded bg-black bg-opacity-30 text-white focus:ring-2 focus:ring-cyan-400 transition"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 rounded bg-black bg-opacity-30 text-white focus:ring-2 focus:ring-cyan-400 transition"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-white mb-1">Message</label>
          <textarea
            name="message"
            className="w-full p-2 rounded bg-black bg-opacity-30 text-white focus:ring-2 focus:ring-cyan-400 transition"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
