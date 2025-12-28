import { motion } from 'framer-motion'

const services = [
  { title: 'New Builds', desc: 'Build from the ground up with a mindful approach. We ensure a strong foundation and lasting results.' },
  { title: 'Extensions', desc: 'Expand your living space while keeping your home tranquil. We blend function and style to fit seamlessly.' },
  { title: 'Renovations', desc: 'Refresh any area of your home with minimal hassle. Our team upgrades your space while respecting its character.' },
  { title: 'Carpentry & Joinery', desc: 'Enhance your home with custom woodwork. We craft precise details that bring warmth and quality to every room.' },
  { title: 'Bathrooms', desc: 'Turn your bathroom into a soothing retreat. From simple makeovers to full remodels, we focus on comfort and style.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl text-center mb-4 text-gray-900 fade-in"
        >
          Comprehensive Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 max-w-3xl mx-auto text-gray-600 slide-in"
        >
          Zen Construction is your one-stop shop for all your building and construction needs. From constructing new-build properties to handling minor repairs, no job is too big or small for our team. We even offer personalised support for projects like changing a light bulb for an elderly relative. We know the importance of aftercare once a project is complete. That's why we don't just finish jobs—we build lasting relationships with our customers and community.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition scale-hover"
            >
              <h3 className="heading text-xl mb-4 text-gray-900 fade-in">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12 text-gray-500 slide-in"
        >
          ...and everything else:
          <ul className="list-disc list-inside mt-4 text-left max-w-md mx-auto text-gray-600">
            <li>Plumbing & Electrics</li>
            <li>Groundwork & Brickwork</li>
            <li>Plastering & Rendering</li>
            <li>Decorating</li>
            <li>Handyman Service</li>
            <li>24/7 Callout</li>
          </ul>
        </motion.p>
      </div>
    </section>
  )
}