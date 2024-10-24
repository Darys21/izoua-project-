import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, QrCode, History, Award } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import QRScanner from './QRScanner';

const mockUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', points: 150, level: 'Gold' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', points: 80, level: 'Silver' },
  { id: 3, name: 'Bob Wilson', email: 'bob@example.com', points: 30, level: 'Bronze' },
];

const Dashboard = () => {
  const { user } = useAuth();
  const [showScanner, setShowScanner] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [pointsToAdd, setPointsToAdd] = useState('');

  const handleScan = (data: string) => {
    // Mock finding user from QR code
    const user = mockUsers.find(u => u.id.toString() === data);
    if (user) {
      setSelectedUser(user);
      setShowScanner(false);
    }
  };

  const handleAddPoints = () => {
    if (selectedUser && pointsToAdd) {
      // Mock API call to add points
      console.log(`Added ${pointsToAdd} points to user ${selectedUser.name}`);
      setSelectedUser(null);
      setPointsToAdd('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.name}</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Users className="h-8 w-8 text-orange-600 mb-2" />
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-2xl font-bold">{mockUsers.length}</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Award className="h-8 w-8 text-orange-600 mb-2" />
            <h3 className="text-lg font-semibold">Total Points</h3>
            <p className="text-2xl font-bold">
              {mockUsers.reduce((acc, user) => acc + user.points, 0)}
            </p>
          </motion.div>
        </div>

        {/* QR Scanner Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">QR Code Scanner</h2>
            <button
              onClick={() => setShowScanner(!showScanner)}
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              <QrCode className="h-5 w-5" />
            </button>
          </div>

          {showScanner && (
            <div className="mb-6">
              <QRScanner onScan={handleScan} />
            </div>
          )}

          {selectedUser && (
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Add Points for {selectedUser.name}</h3>
              <div className="flex gap-4">
                <input
                  type="number"
                  value={pointsToAdd}
                  onChange={(e) => setPointsToAdd(e.target.value)}
                  className="px-4 py-2 border rounded-lg"
                  placeholder="Enter points"
                />
                <button
                  onClick={handleAddPoints}
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
                >
                  Add Points
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Users List */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">Users</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Name</th>
                  <th className="text-left py-3">Email</th>
                  <th className="text-left py-3">Points</th>
                  <th className="text-left py-3">Level</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockUsers.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="py-3">{user.name}</td>
                    <td className="py-3">{user.email}</td>
                    <td className="py-3">{user.points}</td>
                    <td className="py-3">{user.level}</td>
                    <td className="py-3">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-orange-600 hover:text-orange-700"
                      >
                        Add Points
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;