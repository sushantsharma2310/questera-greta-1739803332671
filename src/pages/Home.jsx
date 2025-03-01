import { motion } from 'framer-motion';
import Reviews from '../components/Reviews';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="h-[80vh] bg-cover bg-center relative" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">Welcome to Cozy Corner Café</h1>
            <p className="text-xl mb-8">Where every cup tells a story</p>
            <a href="#featured" className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors">
              Explore Our Menu
            </a>
          </motion.div>
        </div>
      </div>

      {/* Featured Section */}
      <section id="featured" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Coffee"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Signature Latte</h3>
                <p className="text-gray-600">Our house specialty with a perfect blend of espresso and steamed milk.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Pastry"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Fresh Pastries</h3>
                <p className="text-gray-600">Freshly baked pastries made from scratch every morning.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Breakfast"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Breakfast Special</h3>
                <p className="text-gray-600">Start your day right with our delicious breakfast options.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />
    </div>
  );
};

export default Home;