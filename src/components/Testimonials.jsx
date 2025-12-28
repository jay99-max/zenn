import { motion } from 'framer-motion'

const testimonials = [
  { quote: 'Highly Skilled Team: Zen Construction built us a wonderful bespoke staircase. Quality work by friendly professionals.', name: 'Louise Bennett' },
  { quote: 'Excellent Attention to Detail: Our kitchen renovation was quick, tidy, and carefully done. The final result is just fantastic.', name: 'Tom Harris' },
  { quote: 'Perfect Extra Space: They delivered exactly what we needed—a practical, attractive extension with minimal fuss.', name: 'Charlotte Evans' },
  { quote: 'Professional & Friendly: Our new build went smoothly from planning to completion. Great communication and craftsma nship.', name: 'Mike Dawson' },
  { quote: 'Lovely New Bathroom: Zen Construction refreshed our bathroom beautifully. Clean work and considerate team. Couldnt be happier.', name: 'Rebecca Hughes' },
  { quote: 'Beautiful Woodwork: Weare delighted with our new custom shelving. The quality of the carpentry is outstanding.', name: 'Paul Richards' },
  { quote: 'Quality Renovation Work: The team renovated our living room perfectly. Great attention to detail and minimal disruption.', name: 'Emily Carter' },
  { quote: 'Stress-Free Extension: Our extension blends beautifully with our home. The process was smooth and respectful from start to finish.', name: 'James Wright' },
  { quote: 'Fantastic Home Builders: Zen Construction built our new home exactly as we wanted. Professional, reliable and friendly throughout. Highly recommended.', name: 'Sarah Thompson' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl text-center mb-12 text-gray-900 fade-in"
        >
          Proven Excellence
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 max-w-3xl mx-auto text-gray-600 slide-in"
        >
          We believe a builder is only as good as their last project. That's why we take immense pride in the long list of satisfied customers willing to vouch for our work. You don't have to take our word for it—talk to our previous clients directly.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition scale-hover"
            >
              <p className="quote text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
              <p className="font-semibold text-gray-900">- {t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}