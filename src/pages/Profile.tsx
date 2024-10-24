import React from 'react';
import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { Trophy, Star, Clock, Gift } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();
  const qrValue = `IZOUA_LOYALTY_${user?.id}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.div
        variants={itemVariants}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div className="bg-gradient-to-r from-orange-600 to-orange-400 px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="text-white">
              <h1 className="text-3xl font-bold">{user?.name}</h1>
              <p className="flex items-center mt-2">
                <Trophy className="h-5 w-5 mr-2" />
                {user?.level} Member
              </p>
            </div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-white text-right bg-white/20 p-4 rounded-lg backdrop-blur-sm"
            >
              <p className="text-3xl font-bold">{user?.points}</p>
              <p className="text-sm">Total Points</p>
            </motion.div>
          </div>
        </div>

        <div className="p-6">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-gradient-to-b from-orange-50 to-white p-6 rounded-xl shadow-md">
              <QRCodeSVG value={qrValue} size={200} />
              <p className="text-center mt-4 text-sm text-gray-600">Your unique QR Code</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center">
                <Star className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Points Balance</h3>
                  <p className="text-3xl font-bold text-orange-600">{user?.points}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-6 shadow-md"
            >
              <div className="flex items-center">
                <Gift className="h-8 w-8 text-orange-600 mr-3" />
                <div>
                  <h3 className="font-semibold text-lg">Next Reward</h3>
                  <p className="text-lg text-gray-600">50 points to go!</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-3" />
                    <div>
                      <p className="font-semibold">Visit to Izoua Restaurant</p>
                      <p className="text-sm text-gray-600">March {i}, 2024</p>
                    </div>
                  </div>
                  <p className="text-orange-600 font-semibold">+10 points</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Profile;