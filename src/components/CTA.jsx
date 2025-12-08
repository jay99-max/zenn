import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 bg-brown-light text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl mb-6 text-[#1c1917] fade-in"
        >
          Begin Your Zen Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-[#1c1917]/80 mb-8 slide-in"
        >
          Let ZENN CONSTRUCTION LTD transform your vision into reality.
        </motion.p>
        <Link
          to="/contact"
          className="inline-block bg-brown-accent text-white px-8 py-4 rounded-md hover-brown transition shadow-md scale-hover"
        >
          Reach Out
        </Link>
      </div>
    </section>
  )
}