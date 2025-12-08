import { motion } from 'framer-motion'

const images = ['/images/p1.jpg','/images/p2.jpg','/images/p3.jpg','/images/p4.jpg','/images/p5.jpg','/images/p6.jpg']

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#f5e6d3]">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-4xl text-center mb-16 text-[#1c1917]"
        >
          Our Recent Work
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, z: 50 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img src={src} alt="Project" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}