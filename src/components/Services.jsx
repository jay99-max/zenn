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
    <section id="services" className="py-20 bg-brown-main">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="heading text-3xl text-center mb-4 text-[#1c1917] fade-in"
        >
          Comprehensive Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-12 max-w-3xl mx-auto text-gray-600 slide-in"
        >
          ZENN CONSTRUCTION LTD is your one-stop shop for all your building and construction needs. No job is too big or small.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              className="bg-brown-card p-8 rounded-xl shadow-md hover:shadow-xl hover-brown transition-all duration-500 scale-hover"
            >
              <h3 className="heading text-xl mb-4 text-[#451a03] fade-in">{s.title}</h3>
              <p className="text-[#1c1917]/80">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          className="text-center mt-12 text-gray-500 slide-in"
        >
          ...and everything else: Plumbing & Electrics, Groundwork & Brickwork, Plastering & Rendering, Decorating, Handyman Service, 24/7 Callout.
        </motion.p>
      </div>
    </section>
  )
}