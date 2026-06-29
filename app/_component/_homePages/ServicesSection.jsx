'use client';

import { Grid3x3, Building2, Headset } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Grid3x3,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Property Management',
    description:
      'At Green Acres Delta, we provide property owners and landlords with efficient, transparent, and reliable management solutions. From tenant relations to financial oversight, our services are designed to protect your assets, maximize returns, and give you peace of mind',
  },
  {
    icon: Building2,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
    title: 'Home Buying',
    description:
      'At Green Acres Delta, we make home ownership simple and stress-free. Whether it’s your first home or a dream upgrade, our team provides tailored support — from property selection to closing — ensuring a smooth and transparent experience.',
  },
  {
    icon: Headset,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    title: 'Consulting Service',
    description:
      'At Green Acres Delta, our experts provide strategic guidance across the real estate industry. From market analysis and investment planning to compliance and portfolio optimization, we deliver tailored solutions that help clients make confident decisions and achieve lasting success.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          What we are providing
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  transition: { duration: 0.3 } 
                }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`${service.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-6`}
                >
                  <Icon className={`w-6 h-6 ${service.iconColor}`} />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
