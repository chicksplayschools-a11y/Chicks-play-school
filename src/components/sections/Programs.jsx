import { motion } from 'framer-motion';
import { Baby, Gamepad2, Palette, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import Section from '../Section';

const programs = [
  {
    icon: <Baby size={40} className="text-white drop-shadow-md" />,
    title: 'Toddler',
    desc: 'A nurturing space for our youngest learners to explore, bond, and build early motor and sensory skills through guided play.',
    color: 'bg-primary/20',
    iconBg: 'bg-gradient-to-br from-primary to-primary/70',
    borderColor: 'border-t-[6px] border-t-primary',
    titleColor: 'text-text',
    delay: 0
  },
  {
    icon: <Gamepad2 size={40} className="text-white drop-shadow-md" />,
    title: 'Playgroup',
    desc: 'A gentle introduction to learning where children develop social skills, basic communication, and confidence through fun activities and play.',
    color: 'bg-secondary/20',
    iconBg: 'bg-gradient-to-br from-secondary to-[#FF8A7A]',
    borderColor: 'border-t-[6px] border-t-secondary',
    titleColor: 'text-text',
    delay: 0.1
  },
  {
    icon: <Palette size={40} className="text-white drop-shadow-md" />,
    title: 'Nursery',
    desc: 'Building strong foundations in language, creativity, and early education through interactive and engaging learning methods.',
    color: 'bg-accent/20',
    iconBg: 'bg-gradient-to-br from-accent to-[#E6A100]',
    borderColor: 'border-t-[6px] border-t-accent',
    titleColor: 'text-text',
    delay: 0.2
  },
  {
    icon: <Sparkles size={40} className="text-white drop-shadow-md" />,
    title: 'PP1',
    desc: 'Introducing letters, numbers, and structured routines to prepare children for more formal early education.',
    color: 'bg-primary/20',
    iconBg: 'bg-gradient-to-br from-primary to-primary/70',
    borderColor: 'border-t-[6px] border-t-primary',
    titleColor: 'text-text',
    delay: 0.3
  },
  {
    icon: <BookOpen size={40} className="text-white drop-shadow-md" />,
    title: 'PP2',
    desc: 'Strengthening reading, writing, and number skills to build a confident bridge into primary school.',
    color: 'bg-secondary/20',
    iconBg: 'bg-gradient-to-br from-secondary to-[#FF8A7A]',
    borderColor: 'border-t-[6px] border-t-secondary',
    titleColor: 'text-text',
    delay: 0.4
  },
  {
    icon: <GraduationCap size={40} className="text-white drop-shadow-md" />,
    title: '1st to 3rd Class',
    desc: 'A structured academic curriculum focused on core subjects, critical thinking, and holistic development for growing minds.',
    color: 'bg-accent/20',
    iconBg: 'bg-gradient-to-br from-accent to-[#E6A100]',
    borderColor: 'border-t-[6px] border-t-accent',
    titleColor: 'text-text',
    delay: 0.5
  }
];

export default function Programs() {
  return (
    <Section id="programs" bg="bg-transparent" className="!overflow-visible">
      {/* Flanking Mascots */}
      <div className="absolute inset-0 pointer-events-none z-40 opacity-100">
        {/* Left Mascot */}
        <motion.img
          src="/chick-programs-left.png"
          alt="Left Programs Mascot"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="absolute top-4 left-0 w-24 h-24 sm:top-10 sm:-left-4 md:-top-[200px] md:-left-10 md:w-80 md:h-80 lg:-top-[300px] lg:-left-16 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
        {/* Right Mascot */}
        <motion.img
          src="/chick-programs-right.png"
          alt="Right Programs Mascot"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="absolute sm:top-40 sm:-right-4 w-24 h-24 md:-top-[160px] md:-right-10 md:w-80 md:h-80 lg:-top-[260px] lg:-right-16 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl hidden md:block"
          style={{ animation: 'float 2.5s ease-in-out infinite' }}
        />
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
            className={`card-base p-8 relative overflow-hidden group ${prog.borderColor}`}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${prog.color} filter blur-2xl group-hover:scale-150 transition-transform duration-500`}></div>

            <div className={`w-20 h-20 rounded-2xl ${prog.iconBg} flex items-center justify-center shadow-lg relative z-10 mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform`}>
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