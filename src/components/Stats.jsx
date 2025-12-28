import { motion } from 'framer-motion'

const stats = [
  { value: '14+', label: 'Years of Experience' },
  { value: '100+', label: 'Successful Projects' },
  { value: '80%', label: 'Repeat Customers' },
  { value: '0', label: 'Stress Working With Us' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-gray-50">  
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="scale-hover"
          >
            <div className="heading text-4xl text-[#451a03] mb-2 fade-in">{s.value}</div>
            <div className="text-gray-600">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}