import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Facebook Floating Button (Left Side) */}
      <div className="fixed bottom-2 left-2 md:bottom-6 md:left-6 z-[100] flex flex-col items-center">
        <motion.a
          href="https://www.facebook.com/crayonsplayschool.oldalwal/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', bounce: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center cursor-pointer relative z-20 group"
          aria-label="Visit our Facebook"
        >
          <div className="relative">
            {/* Chick Mascot sitting on top of the Facebook button */}
            <motion.img
              src="/chick-facebook.png"
              alt="Facebook Mascot"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl z-30 transition-transform group-hover:scale-110"
            />
          </div>

          {/* Text Badge */}
          <div className="bg-white text-[#1877F2] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] border-2 border-white -mt-3 md:-mt-2 relative z-40 text-xs md:text-sm whitespace-nowrap">
            Follow us!
          </div>
        </motion.a>
      </div>

      <div className="fixed bottom-2 right-2 md:bottom-6 md:right-6 z-[100] flex flex-col items-center gap-4">
        {/* WhatsApp Floating Button */}
        <motion.a
          href="https://wa.me/918639851140"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', bounce: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center cursor-pointer relative z-20 group"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            {/* Chick Mascot sitting on top of the WhatsApp button */}
            <motion.img
              src="/chick-whatsapp.png"
              alt="WhatsApp Mascot"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-xl z-30 transition-transform group-hover:scale-110"
            />
            {/* Tooltip ping pointer */}
            <span className="absolute top-1 right-2 md:top-2 md:right-4 flex h-3 w-3 md:h-4 md:w-4 z-40">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 md:h-4 md:w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </div>

          {/* Text Badge */}
          <div className="bg-white text-[#25D366] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] border-2 border-white -mt-3 md:-mt-2 relative z-40 text-xs md:text-sm whitespace-nowrap">
            Chat with us!
          </div>
        </motion.a>
      </div>
    </>
  );
}
