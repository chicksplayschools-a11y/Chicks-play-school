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
    <Section id="gallery" bg="bg-transparent" className="!overflow-visible">
      {/* Background Decor Mascots */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
        <motion.img
          src="/chick-gallery-left.png"
          alt="Gallery Left Mascot"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-[300px] -left-10 w-[450px] h-[450px] object-contain drop-shadow-xl"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
        <motion.img
          src="/chick-gallery-right.png"
          alt="Gallery Right Mascot"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute -top-[380px] -right-[160px] w-[650px] h-[650px] object-contain drop-shadow-xl"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
      </div>
      <div className="text-center max-w-2xl mx-auto mb-16 relative">


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
        {images.map((img, index) => {
          const isLast = index === images.length - 1;
          
          const CardContent = (
            <div className="w-full aspect-square overflow-hidden bg-gray-100 relative group">
              <img 
                src={img.src} 
                alt={`Gallery image ${img.id}`} 
                className={`w-full h-full object-cover transition-transform duration-700 ${isLast ? 'group-hover:scale-110' : ''}`} 
              />
              
              {isLast && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 flex flex-col items-center justify-center backdrop-blur-[2px] group-hover:backdrop-blur-sm">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-[#1877F2] rounded-full flex items-center justify-center mb-3 shadow-[0_4px_15px_rgba(24,119,242,0.5)] transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
                    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 md:w-7 md:h-7">
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                    </svg>
                  </div>
                  <span className="text-white font-bold font-heading text-xl md:text-2xl drop-shadow-md transform group-hover:-translate-y-1 transition-transform duration-300">
                    View More
                  </span>
                  <span className="text-white/90 text-xs md:text-sm font-medium mt-1 transform group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                    on Facebook
                  </span>
                </div>
              )}
            </div>
          );

          const wrapperProps = {
            initial: { opacity: 0, scale: 0.8 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            whileHover: { scale: 1.05, rotate: 0 },
            transition: { duration: 0.4, delay: img.delay },
            className: `bg-white p-3 pb-10 sm:p-4 sm:pb-14 shadow-md hover:shadow-2xl cursor-pointer transition-all z-10 hover:z-20 origin-center ${img.rotate} block`
          };

          return isLast ? (
            <motion.a
              key={img.id}
              href="https://www.facebook.com/crayonsplayschool.oldalwal/photos"
              target="_blank"
              rel="noopener noreferrer"
              {...wrapperProps}
            >
              {CardContent}
            </motion.a>
          ) : (
            <motion.div key={img.id} {...wrapperProps}>
              {CardContent}
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
