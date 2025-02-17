import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold mb-8">Our Story</h1>
          <p className="text-lg text-gray-700 mb-12">
            Founded in 2010, Cozy Corner Café has been serving the community with 
            the finest coffee and homemade treats. Our passion for quality and 
            commitment to creating a welcoming atmosphere has made us a beloved 
            destination for coffee lovers and food enthusiasts alike.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Cafe Interior" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-semibold">Our Space</h2>
            <p className="text-gray-700">
              Our café features a warm and inviting atmosphere, perfect for working, 
              meeting friends, or simply enjoying a moment of solitude with your 
              favorite beverage.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <img 
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Coffee Brewing" 
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
            <h2 className="text-2xl font-semibold">Our Coffee</h2>
            <p className="text-gray-700">
              We source our beans from sustainable farms and roast them in small 
              batches to ensure the highest quality and freshness in every cup we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;