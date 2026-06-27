'use client';

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Susan Barkley",
    role: "Buyer",
    image: "/assets/images/testimonials/testimonials_1.jpg",
    review:
      "The Emirates Real Estate team did an outstanding job helping me buy my first home. The high level of service exceeded my expectations.",
  },
  {
    id: 2,
    name: "Jim Lorent",
    role: "Happy Buyer, UK",
    image: "/assets/images/testimonials/testimonials_1.jpg",
    review:
      "The Emirates Real Estate team delivered on every promise and I would highly recommend them. Excellent service!",
  },
  {
    id: 3,
    name: "Mika Gilmore",
    role: "Happy Seller",
    image: "/assets/images/testimonials/testimonials_1.jpg",
    review:
      "Selling my property was simple and stress-free. The team was professional and transparent throughout the process.",
  },
  {
    id: 4,
    name: "Susan Barkley",
    role: "Happy Buyer, Italy",
    image: "/assets/images/testimonials/testimonials_1.jpg",
    review:
      "Amazing experience from start to finish. I found my dream home quickly and smoothly.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const starVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export default function Testimonials() {
  return (
    <section className="bg-[#d9edf0] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-block px-4 py-2 rounded-lg bg-white text-sm font-medium text-gray-700 mb-8"
        >
          Testimonials
        </motion.span>

        {/* Heading Section */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-5xl font-bold text-[#062f5b] leading-tight"
          >
            Sell With Emirates Real Estate Fast And Efficient
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-[#163b68] flex items-center"
          >
            Experience a smooth, transparent process designed to maximize
            your property's value while minimizing your stress.
            Sell smart, sell fast.
          </motion.p>
        </div>

        {/* Testimonial Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8"
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />
                </motion.div>

                <div>
                  <h3 className="text-2xl font-semibold text-[#062f5b]">
                    {item.name}
                  </h3>
                  <p className="text-gray-600">{item.role}</p>
                </div>
              </div>

              {/* Review */}
              <p className="text-[#163b68] leading-8 mb-8">
                {item.review}
              </p>

              {/* Rating */}
              <motion.div 
                className="flex gap-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              >
                {[...Array(5)].map((_, index) => (
                  <motion.div key={index} variants={starVariants}>
                    <Star
                      size={20}
                      fill="#FBBF24"
                      color="#FBBF24"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
