import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden z-20">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -top-[50%] -right-[10%] w-[800px] h-[800px] border-[40px] border-white/10 rounded-full"></motion.div>
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 100, repeat: Infinity, ease: "linear" }} className="absolute -bottom-[50%] -left-[10%] w-[600px] h-[600px] border-[40px] border-white/10 rounded-full"></motion.div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading text-text mb-6 drop-shadow-sm"
        >
          Give Your Child <br className="hidden sm:block"/>
          the <span className="drop-shadow-md">Best Start</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl sm:text-2xl text-text/80 mb-10 max-w-2xl mx-auto font-medium"
        >
          Book a visit today and experience a joyful learning environment for your child.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <Button size="lg" className="w-full sm:w-auto bg-text text-white hover:bg-text/90 shadow-float text-xl px-10 py-5" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Visit
          </Button>
          <Button size="lg" className="w-full sm:w-auto bg-white text-text hover:bg-gray-50 shadow-float text-xl px-10 py-5 flex items-center justify-center gap-2" onClick={() => window.location.href='tel:+918639851140'}>
            <span>📞</span> Call Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
