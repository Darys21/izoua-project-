import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Pizza, Star, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';

const Landing = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-orange-900/60" />
          </div>
          
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                IZOUA PIZZA
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Where Every Slice Tells a Story
              </p>
              <Link
                to="/register"
                className="inline-block bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors transform hover:scale-105"
              >
                Join & Get Rewards
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="py-20 bg-white"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div variants={itemVariants} className="text-center">
                <Pizza className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Artisanal Pizza</h3>
                <p className="text-gray-600">Handcrafted with love and premium ingredients</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <Star className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Loyalty Rewards</h3>
                <p className="text-gray-600">Earn points with every order</p>
              </motion.div>

              <motion.div variants={itemVariants} className="text-center">
                <Clock className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Hot and fresh to your doorstep</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Location Section */}
        <div className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Find Us</h2>
              <div className="flex items-center justify-center space-x-2 text-orange-600">
                <MapPin className="h-6 w-6" />
                <p className="text-xl">123 Pizza Street, Food City</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Landing;