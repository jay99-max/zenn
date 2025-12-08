import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-construction.jpg" 
          alt="ZENN Construction Site" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
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
          Premium construction across Essex & London — delivered with calm, care, and unmatched craftsmanship.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <Link
            to="/contact"
            className="inline-block bg-[#451a03] text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-[#5c2a0a] transition shadow-2xl"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  )
}