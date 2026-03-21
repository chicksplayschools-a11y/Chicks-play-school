import { motion } from 'framer-motion';
import Section from '../Section';

const images = [
  { id: 1, src: '/gallery-1.jpg', delay: 0 },
  { id: 2, src: '/gallery-2.jpg', delay: 0.1 },
  { id: 3, src: '/gallery-3.jpg', delay: 0.2 },
  { id: 4, src: '/gallery-4.jpg', delay: 0.3 },
  { id: 5, src: '/gallery-5.jpg', delay: 0.4 },
  { id: 6, src: '/gallery-6.jpg', delay: 0.5 },
];

export default function Gallery() {
  return (
    <Section id="gallery" bg="bg-secondary/50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold font-heading text-text mb-4"
        >
          Moments of Joy & Learning
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-600 text-lg"
        >
          A glimpse into our daily activities, fun sessions, and happy smiles.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((img) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: img.id % 2 === 0 ? 2 : -2 }}
            transition={{ duration: 0.4, delay: img.delay }}
            className="aspect-square sm:aspect-video md:aspect-square bg-white rounded-3xl md:rounded-[2rem] overflow-hidden flex items-center justify-center shadow-sm hover:shadow-float cursor-pointer relative group"
          >
             <img src={img.src} alt={`Gallery image ${img.id}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
             {/* Overlay */}
             <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
