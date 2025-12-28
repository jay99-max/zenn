import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.jpg"  /* Put your best photo here and name it hero-bg.jpg */
          alt="ZENN Construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#451a03]/50" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="heading text-5xl md:text-7xl font-black mb-6 drop-shadow-2xl"
        >
          Mindful Building.<br />
          Peaceful Living.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 drop-shadow-lg"
        >
          From thoughtful planning to meticulous execution, our team ensures every project unfolds with calm, care, and a keen eye for detail.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.9 }}
          className="scale-hover inline-block"
        >
          <Link to="/contact" className="btn-primary text-xl">
            Let's Talk About Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}