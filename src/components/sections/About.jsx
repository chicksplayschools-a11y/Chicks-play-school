import { motion } from 'framer-motion';
import Section from '../Section';
import Button from '../ui/Button';

export default function About() {
  return (
    <Section id="about" bg="bg-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Images Container */}
        <div className="relative order-2 lg:order-1">
          {/* Main Large Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-[3rem] overflow-hidden shadow-float relative z-10 aspect-[4/5] lg:aspect-square bg-secondary border-8 border-white"
          >
            <img src="/about.jpg" alt="Happy Classroom" className="w-full h-full object-cover" />
          </motion.div>

          {/* Floating Small Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute -bottom-12 -right-6 lg:-right-12 w-48 h-48 lg:w-64 lg:h-64 rounded-full border-8 border-white shadow-float bg-gradient-to-tr from-accent/20 to-white z-20 flex items-center justify-center overflow-hidden"
          >
            <span className="text-[80px] drop-shadow-lg">🎨</span>
          </motion.div>

          {/* Decorative Blob */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-2xl z-0"></div>

        </div>

        {/* Text Content */}
        <div className="order-1 lg:order-2 space-y-6 relative">
          {/* Chick Mascot (Moved to the right side) */}
          <motion.img
            src="/chick-about.png"
            alt="About Chick Mascot"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
            className="absolute -top-16 md:-top-32 lg:-top-48 right-0 md:-right-10 lg:-right-20 w-48 h-48 md:w-72 md:h-72 lg:w-[400px] lg:h-[400px] object-contain z-0 drop-shadow-2xl opacity-40 lg:opacity-100 pointer-events-none"
            style={{ animation: 'float 5s ease-in-out infinite' }}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-highlight/10 text-highlight rounded-full font-semibold text-sm"
          >
            <span>👩‍🏫</span> A Second Home for Your Child
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold font-heading text-text leading-tight"
          >
            Welcome to <br /> Chicks Play School
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-gray-600 text-lg"
          >
            <p className="font-medium text-gray-800">
              At Chicks Play School, we believe that every child learns best through play, exploration, and love.
            </p>
            <p>
              Our school provides a warm, safe, and engaging environment where children feel comfortable, happy, and excited to learn.
            </p>
            <p>
              With caring teachers, fun activities, and a focus on overall development, we help every child grow at their own pace with confidence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="pt-4"
          >
            <Button variant="primary" size="lg" className="shadow-float">
              Read More About Us
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
