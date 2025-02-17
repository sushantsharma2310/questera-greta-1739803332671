import { motion } from 'framer-motion';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'Rich and bold single shot' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso with steamed milk and foam' },
    { name: 'Latte', price: '$4.75', description: 'Espresso with steamed milk' },
    { name: 'Americano', price: '$3.75', description: 'Espresso with hot water' }
  ],
  food: [
    { name: 'Croissant', price: '$3.50', description: 'Butter croissant' },
    { name: 'Avocado Toast', price: '$8.50', description: 'Sourdough with fresh avocado' },
    { name: 'Breakfast Sandwich', price: '$7.50', description: 'Egg, cheese, and bacon' },
    { name: 'Yogurt Parfait', price: '$6.50', description: 'Greek yogurt with granola and berries' }
  ]
};

const Menu = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Our Menu
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Coffee & Beverages</h2>
            <div className="space-y-6">
              {menuItems.coffee.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-amber-700 font-semibold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6">Food</h2>
            <div className="space-y-6">
              {menuItems.food.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-amber-700 font-semibold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;