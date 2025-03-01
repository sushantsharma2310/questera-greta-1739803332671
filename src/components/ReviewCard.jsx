import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const ReviewCard = ({ name, date, rating, comment, image }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold">{name}</h3>
            <span className="text-gray-500 text-sm">{date}</span>
          </div>
          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={index < rating ? "text-amber-400" : "text-gray-300"}
              />
            ))}
          </div>
          <p className="text-gray-600">{comment}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;