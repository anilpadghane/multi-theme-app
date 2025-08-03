import React from 'react';

const About: React.FC = () => (
  <main className="pt-20 px-2 md:px-10 transition-all duration-700">
    <h2 className="text-2xl font-bold mb-4">About</h2>
    <p>This page shows your app can switch between three unique Tailwind-based themes and layouts!</p>
    <button className="mt-4 px-4 py-2 rounded bg-pink-300 text-white font-bold shadow hover:bg-pink-500 transition">Another Button</button>
  </main>
);

export default About;
