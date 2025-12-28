import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function FAQs() {
  const [open, setOpen] = useState(null)

  const faqs = [
    { q: 'Do you offer free quotes?', a: 'Yes. We start with a free consultation to understand your needs, then provide a detailed quote before any work begins.' },
    { q: 'How do you manage disruptions?', a: 'We plan our work around your routine as much as possible, keeping noise, dust, and downtime to a minimum.' },
    { q: 'What if I need planning permission?', a: 'We can guide you through the process or liaise directly with local authorities to make sure everything is in order.' },
    { q: 'Do you handle smaller jobs or repairs?', a: 'Absolutely. Whether it is a simple fix or a major renovation, we approach every project with the same level of care.' },
    { q: 'Whatis  your aftercare policy?', a: 'Once the project is completed, we are on hand to address any questions or concerns, ensuring you remain fully satisfied.' },
  ]

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl text-center mb-12 text-gray-900 fade-in"
        >
          Your Questions Answered
        </motion.h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition scale-hover"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left flex justify-between items-center font-semibold text-gray-900"
              >
                {faq.q}
                <ChevronDown className={`w-6 h-6 transition ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="text-gray-600 mt-4 pl-4"
                >
                  {faq.a}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500 slide-in"
        >
          Have more questions? We'd love to hear from you—feel free to reach out anytime!
        </motion.p>
      </div>
    </section>
  )
}