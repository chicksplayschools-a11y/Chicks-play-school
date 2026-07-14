import { motion } from 'framer-motion';
import Section from '../Section';

const images = [
  { id: 1, src: '/gallery-1.jpg', delay: 0, rotate: '-rotate-3' },
  { id: 2, src: '/gallery-2.jpg', delay: 0.1, rotate: 'rotate-2' },
  { id: 3, src: '/gallery-3.jpg', delay: 0.2, rotate: '-rotate-2' },
  { id: 4, src: '/gallery-4.jpg', delay: 0.3, rotate: 'rotate-3' },
  { id: 5, src: '/gallery-5.jpg', delay: 0.4, rotate: '-rotate-1' },
  { id: 6, src: '/gallery-6.jpg', delay: 0.5, rotate: 'rotate-2' },
];

export default function Gallery() {
  return (
    <Section id="gallery" bg="bg-transparent">
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
            whileHover={{ scale: 1.05, rotate: 0 }}
            transition={{ duration: 0.4, delay: img.delay }}
            className={`bg-white p-3 pb-10 sm:p-4 sm:pb-14 shadow-md hover:shadow-2xl cursor-pointer transition-all z-10 hover:z-20 origin-center ${img.rotate}`}
          >
            <div className="w-full aspect-square overflow-hidden bg-gray-100">
              <img src={img.src} alt={`Gallery image ${img.id}`} className="w-full h-full object-cover" />
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
