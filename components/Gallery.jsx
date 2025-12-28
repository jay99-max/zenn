import { motion } from 'framer-motion'

const images = [
  '/images/Image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-4xl text-center mb-16 text-[#451a03]"
        >
          Our Recent Work
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.05, x: 10 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: i * 0.05 
              }}
              className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <img 
                src={src} 
                alt={`Project ${i + 1}`} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}