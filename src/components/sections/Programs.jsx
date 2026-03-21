import { motion } from 'framer-motion';
import Section from '../Section';

const programs = [
  {
    icon: '🧸',
    title: 'Playgroup',
    desc: 'A gentle introduction to learning where children develop social skills, basic communication, and confidence through fun activities and play.',
    color: 'bg-primary/20',
    titleColor: 'text-text',
    delay: 0
  },
  {
    icon: '🎨',
    title: 'Nursery',
    desc: 'Building strong foundations in language, creativity, and early education through interactive and engaging learning methods.',
    color: 'bg-accent/10',
    titleColor: 'text-accent',
    delay: 0.1
  },
  {
    icon: '🧠',
    title: 'Activity-Based Learning',
    desc: 'Hands-on activities that improve thinking skills, creativity, and curiosity — making learning enjoyable and effective.',
    color: 'bg-highlight/10',
    titleColor: 'text-highlight',
    delay: 0.2
  }
];

export default function Programs() {
  return (
    <Section id="programs" bg="bg-secondary">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-white rounded-full text-sm font-semibold text-accent shadow-sm mb-4"
        >
          🎯 Our Core Programs
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold font-heading text-text"
        >
          Where Learning Feels Like Play
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((prog, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            transition={{ 
              hover: { duration: 0.3 }, 
              default: { duration: 0.6, delay: prog.delay } 
            }}
            className="bg-white rounded-[2rem] p-8 shadow-soft hover:shadow-float border border-white relative overflow-hidden group"
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${prog.color} filter blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>
            
            <div className={`w-20 h-20 rounded-2xl ${prog.color} flex items-center justify-center text-4xl mb-6 shadow-sm relative z-10`}>
              {prog.icon}
            </div>
            
            <h3 className={`text-2xl font-bold font-heading mb-4 relative z-10 ${prog.titleColor}`}>
              {prog.title}
            </h3>
            
            <p className="text-gray-600 relative z-10 leading-relaxed">
              {prog.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
