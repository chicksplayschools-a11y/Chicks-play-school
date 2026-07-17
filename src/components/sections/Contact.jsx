import { motion } from 'framer-motion';
import Section from '../Section';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <Section id="contact" bg="bg-transparent" className="border-b border-gray-200 !overflow-visible relative">
      {/* Background Decor Mascots */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-100">
        <motion.img
          src="/chick-contact-left.png"
          alt="Contact Left Mascot"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute sm:top-10 sm:-left-4 w-24 h-24 md:-top-[200px] md:-left-10 md:w-64 md:h-64 lg:-top-[400px] lg:-left-[130px] lg:w-[600px] lg:h-[600px] object-contain drop-shadow-xl hidden md:block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
        <motion.img
          src="/chick-contact-right.png"
          alt="Contact Right Mascot"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="absolute left-[25%] -translate-x-1/2 -top-[170px] w-56 h-56 md:left-auto md:translate-x-0 sm:top-40 sm:-right-4 md:-top-[200px] md:-right-10 md:w-64 md:h-64 lg:-top-[400px] lg:-right-[130px] lg:w-[600px] lg:h-[600px] object-contain drop-shadow-xl block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
      </div>
      <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-accent shadow-sm mb-4"
        >
          📍 We'd Love to Hear From You
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold font-heading text-text"
        >
          Visit Us Today
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[3rem] shadow-soft p-6 sm:p-10 border border-gray-100 relative mt-10 lg:mt-0 z-10">

        {/* Contact Info */}
        <div className="space-y-8 p-4">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
              <MapPin />
            </div>
            <div>
              <h4 className="font-bold text-lg text-text mb-1">Our Address</h4>
              <p className="text-gray-600">
                Plot No-104, Chandra Nagar Colony,<br />
                Old Alwal, Suryanagar,<br />
                Secunderabad, Telangana – 500010
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-4">
            <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent flex-shrink-0">
              <Phone />
            </div>
            <div>
              <h4 className="font-bold text-lg text-text mb-1">Phone</h4>
              <a href="tel:08639851140" className="text-gray-600 hover:text-accent transition-colors block text-lg font-medium">
                08639851140
              </a>
              <a href="tel:09293558901" className="text-gray-600 hover:text-accent transition-colors block text-lg font-medium">
                09293558901
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-4">
            <div className="w-12 h-12 bg-highlight/20 rounded-xl flex items-center justify-center text-highlight flex-shrink-0">
              <Clock />
            </div>
            <div>
              <h4 className="font-bold text-lg text-text mb-1">Timings</h4>
              <p className="text-gray-600">
                Monday – Friday: 8:30 AM – 5:00 PM<br />
                Saturday: 8:30 AM – 2:00 PM<br />
                <span className="text-red-500 font-medium font-sm mt-1 block">Sunday: Closed</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Map Embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full h-[300px] lg:h-full rounded-[2rem] overflow-hidden bg-gray-100 relative"
        >
          {/* Using an iframe to embed Google Maps - placeholder search query based on location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15220.063071221774!2d78.4975765!3d17.5065476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a888c7d6a7d%3A0xcfd6dc37e283287!2sOld%20Alwal%2C%20Alwal%2C%20Secunderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 z-10"
            title="Google Maps Location"
          ></iframe>

          {/* Fallback pattern while loading */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400 z-0">
            Loading Map...
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
