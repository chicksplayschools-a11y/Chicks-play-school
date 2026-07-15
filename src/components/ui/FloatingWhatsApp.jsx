import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <>
      {/* Facebook Floating Button (Left Side) */}
      <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-center">
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
              className="w-32 h-32 drop-shadow-xl z-30 transition-transform group-hover:scale-110"
            />
          </div>

          {/* Text Badge */}
          <div className="bg-white text-[#1877F2] font-bold px-4 py-1.5 rounded-full shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] border-2 border-white -mt-2 relative z-40 text-sm whitespace-nowrap">
            Follow us!
          </div>
        </motion.a>
      </div>

      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-center gap-4">
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
              className="w-32 h-32 drop-shadow-xl z-30 transition-transform group-hover:scale-110"
            />
            {/* Tooltip ping pointer */}
            <span className="absolute top-2 right-4 flex h-4 w-4 z-40">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </div>

          {/* Text Badge */}
          <div className="bg-white text-[#25D366] font-bold px-4 py-1.5 rounded-full shadow-[0_4px_15px_-3px_rgba(0,0,0,0.15)] border-2 border-white -mt-2 relative z-40 text-sm whitespace-nowrap">
            Chat with us!
          </div>
        </motion.a>
      </div>
    </>
  );
}
