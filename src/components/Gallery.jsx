import { motion } from 'framer-motion'

const images = ['/images/p1.jpg', '/images/p2.jpg', '/images/p3.jpg', '/images/p4.jpg', '/images/p5.jpg', '/images/p6.jpg']  /* Add your photos */

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brown-light">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-4xl text-center mb-16 text-[#451a03] fade-in"
        >
          Our Recent Work
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}  /* Swift slide from left */
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ 
                scale: 1.05, 
                x: 10,  /* Subtle slide on hover */
                zIndex: 10 
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,  /* Bouncy fun feel */
                delay: i * 0.05 
              }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-brown-card hover:shadow-2xl transition-all duration-500 scale-hover cursor-pointer"
            >
              <img src={src} alt="Project" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}