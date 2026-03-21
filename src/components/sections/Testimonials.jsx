import { motion } from 'framer-motion';
import Button from '../ui/Button';

const reviews = [
  {
    text: "Very good atmosphere. Teachers are caring and supportive. Great place for kids.",
    author: "Happy Parent"
  },
  {
    text: "We like the warm environment, passionate teachers, and child-friendly activities.",
    author: "Satisfied Mother"
  },
  {
    text: "Excellent school and staff. They give personal attention to every child.",
    author: "Proud Father"
  },
  {
    text: "Good teaching and caring. My child enjoys going to school every day.",
    author: "Grateful Parent"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-primary/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-accent shadow-sm mb-4"
        >
          ⭐ Real Reviews from Parents
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold font-heading text-text"
        >
          Loved by Parents in Old Alwal
        </motion.h2>
      </div>

      {/* Auto-scrolling carousel track */}
      <div className="relative w-full overflow-hidden flex pb-8">
        {/* We use two identical tracks to create an infinite loop effect */}
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap gap-6 w-max"
        >
          {[...reviews, ...reviews, ...reviews].map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-8 shadow-soft border-2 border-white w-[300px] sm:w-[400px] flex-shrink-0 flex flex-col justify-between whitespace-normal"
            >
              <div>
                <div className="flex text-primary text-lg mb-4">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
                  "{rev.text}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold font-heading">
                  {rev.author.charAt(0)}
                </div>
                <span className="font-semibold text-text">{rev.author}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-10 text-center">
        <Button variant="secondary" className="shadow-sm">
           Read More Reviews on Google
        </Button>
      </div>
    </section>
  );
}
