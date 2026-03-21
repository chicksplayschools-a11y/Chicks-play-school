import { motion } from 'framer-motion';

export default function Section({ 
  children, 
  id, 
  className = '', 
  bg = 'bg-white',
  innerClassName = ''
}) {
  return (
    <section id={id} className={`w-full py-20 lg:py-28 relative overflow-hidden ${bg} ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${innerClassName}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
