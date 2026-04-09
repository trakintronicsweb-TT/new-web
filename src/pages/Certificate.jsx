import React from 'react';
import './Certificate.css'; // Import the CSS

export default function Certificate() {
  // Example certificate data
  const certificates = [
    {
      title: 'Electronics Project Completion',
      issuedBy: 'TRAKIN TRONICS',
      date: 'Dec 2025',
    },
    {
      title: 'Workshop Participation',
      issuedBy: 'TRAKIN TRONICS',
      date: 'Nov 2025',
    },
    {
      title: 'Internship Completion',
      issuedBy: 'TRAKIN TRONICS',
      date: 'Oct 2025',
    },
  ];

  return (
    <div className="certificate-page p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-cyan-600 text-center mb-8">
        Certificates
      </h1>

      <div className="certificate-grid grid md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div key={index} className="certificate-card bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{cert.title}</h2>
            <p className="text-gray-600 mb-1">
              Issued By: <span className="font-medium">{cert.issuedBy}</span>
            </p>
            <p className="text-gray-600">
              Date: <span className="font-medium">{cert.date}</span>
            </p>
            <button className="mt-4 w-full bg-cyan-600 text-white py-2 rounded hover:bg-cyan-700 transition">
              View Certificate
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
