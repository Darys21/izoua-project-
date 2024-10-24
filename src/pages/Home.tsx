import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Award, History } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Izoua Fidelity Program
        </h1>
        <p className="text-xl text-gray-600">
          Earn points and rewards with every visit to Izoua Restaurant
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <QrCode className="h-12 w-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Unique QR Code</h3>
          <p className="text-gray-600">Get your personal QR code for quick and easy points collection</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <Award className="h-12 w-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Earn Rewards</h3>
          <p className="text-gray-600">Accumulate points with every purchase and unlock exclusive rewards</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <History className="h-12 w-12 mx-auto text-orange-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Track History</h3>
          <p className="text-gray-600">Monitor your visits and points in real-time</p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Home;