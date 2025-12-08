import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl mb-8 text-gray-900"
        >
          The Zen Difference
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-lg text-gray-600 mb-10"
        >
          With over 14 years of experience, we redefine construction as seamless and enjoyable. 
          Our hand-selected team focuses on mindfulness and care, ensuring reliability and safety.
        </motion.p>
        <a href="/contact" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition shadow-md">
          Let's Talk About Your Project
        </a>
      </div>
    </section>
  )
}