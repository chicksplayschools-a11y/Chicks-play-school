import { motion } from 'framer-motion';

export default function TrustBar() {
  const items = [
    { icon: '⭐', text: 'Rated by Happy Parents', highlight: false },
    { icon: '👶', text: 'Nurturing Young Minds', highlight: false },
    { icon: '🏫', text: 'Safe & Friendly Environment', highlight: false },
    { icon: '🎨', text: 'Activity-Based Learning', highlight: true },
  ];

  return (
    <section className="w-full bg-transparent py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-x-0 lg:divide-x-2 divide-gray-200">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 p-2"
            >
              <span className="text-3xl">{item.icon}</span>
              <span className={`font-semibold text-sm sm:text-base ${item.highlight ? 'text-accent' : 'text-text'}`}>
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
