import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="py-20 bg-gray-100 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl mb-6 text-gray-900"
        >
          Begin Your Zen Journey
        </motion.h2>
        <Link
          to="/contact"
          className="inline-block bg-blue-700 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition shadow-md"
        >
          Reach Out
        </Link>
      </div>
    </section>
  )
}