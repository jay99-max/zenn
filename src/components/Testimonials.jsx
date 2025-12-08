import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Highly Skilled Team: ZENN built us a wonderful bespoke staircase. Quality work by friendly professionals.', name: 'Louise Bennett' },
  { quote: 'Excellent Attention to Detail: Our kitchen renovation was quick, tidy, and carefully done. The final result is just fantastic.', name: 'Tom Harris' },
  { quote: 'Perfect Extra Space: They delivered exactly what we needed—a practical, attractive extension with minimal fuss.', name: 'Charlotte Evans' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl text-center mb-12 text-gray-900"
        >
          Proven Excellence
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-100 p-8 rounded-lg"
            >
              <p className="quote text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <p className="font-medium text-gray-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}