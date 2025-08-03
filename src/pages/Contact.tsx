import React from 'react';

const Contact: React.FC = () => (
  <main className="pt-20 px-2 md:px-10 transition-all duration-700">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <form className="space-y-4 max-w-md">
      <input type="text" placeholder="Name" className="w-full p-2 border border-gray-300 rounded" />
      <input type="email" placeholder="Email" className="w-full p-2 border border-gray-300 rounded" />
      <button className="px-4 py-2 rounded bg-green-500 text-white shadow hover:bg-green-700 transition">Submit</button>
    </form>
  </main>
);

export default Contact;
