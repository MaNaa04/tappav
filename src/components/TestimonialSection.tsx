import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Quote,
} from "lucide-react";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Tarun Talwar",
      image:
        "https://images.unsplash.com/photo-1636294155450-4aad425a970b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhdWRpb3BoaWxlJTIwbGlzdGVuaW5nJTIwcm9vbXxlbnwxfHx8fDE3NzA3NDA2MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Teammox experience completely transformed my view of home theater. Tommoy and his team patiently answered all my questions, helped me choose the right equipment and speakers and offered valuable suggestions throughout. Their installation was flawless. I highly recommend them for home theater solutions.",
    },
    {
      name: "Vikram Pawar",
      image:
        "https://images.unsplash.com/photo-1710131459450-7c384b8be18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwaG9tZSUyMHRoZWF0ZXIlMjBsdXh1cnklMjBzZWF0aW5nfGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "After enjoying my dream home theater, I want to share my wonderful experience in making it a reality. Tommoy is professional, knowledgeable and understands customer needs. Vikram, Pawar and the team worked hard and kept me updated on every step. They delivered on stars!",
    },
    {
      name: "Touchwood Automations",
      image:
        "https://images.unsplash.com/photo-1531104985437-603d6490e6d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpb3BoaWxlJTIwc291bmQlMjBzeXN0ZW0lMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDc0MDkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      quote:
        "Touchwood Automations is a top dealer for quality home cinema and theater systems. They offer great flexibility in purchase decisions and are technically skilled. Tommoy Mehta expertly guided us through the process to find the perfect system. We're very happy with the experience!",
    },
  ];

  const handlePrev = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl mb-4"
            style={{ fontFamily: "Gloock, serif" }}
          >
            Hear From Our Customers
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              >
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

                {/* Play Button */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                    <Play
                      size={32}
                      className="text-[#0066CC] ml-1"
                      fill="currentColor"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#0066CC]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <div className="absolute -top-16 right-0 flex gap-4">
              <motion.button
                onClick={handlePrev}
                className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft
                  size={24}
                  className="text-gray-600"
                />
              </motion.button>

              <motion.button
                onClick={handleNext}
                className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight
                  size={24}
                  className="text-gray-600"
                />
              </motion.button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl p-8 shadow-lg relative"
              >
                {/* Quote Icon */}
                <Quote
                  size={48}
                  className="text-gray-200 mb-4"
                />

                {/* Quote Text */}
                <p
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                  style={{ fontFamily: "Lora, serif" }}
                >
                  {testimonials[activeIndex].quote}
                </p>

                {/* Name */}
                <p
                  className="font-medium text-gray-900"
                  style={{ fontFamily: "Gloock, serif" }}
                >
                  {testimonials[activeIndex].name}
                </p>

                {/* Decorative Quote Mark */}
                <div className="absolute bottom-8 right-8">
                  <Quote
                    size={48}
                    className="text-gray-200 rotate-180"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}