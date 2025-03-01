import { motion } from 'framer-motion';
import ReviewCard from './ReviewCard';

const reviews = [
  {
    name: "Sarah Johnson",
    date: "March 15, 2024",
    rating: 5,
    comment: "Best coffee in town! The atmosphere is so cozy and welcoming. Their pastries are to die for!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Michael Chen",
    date: "March 12, 2024",
    rating: 4,
    comment: "Great place to work remotely. The wifi is reliable and the staff is very friendly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Emily Rodriguez",
    date: "March 10, 2024",
    rating: 5,
    comment: "Their signature latte is amazing! I come here every morning before work.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600">Read reviews from our valued customers</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;