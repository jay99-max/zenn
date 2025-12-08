import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section className="min-h-screen py-32 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <Link to="/" className="inline-flex items-center text-gray-700 hover:text-gray-900 mb-8">
          <ArrowLeft className="mr-2" /> Back to Home
        </Link>
        <h1 className="heading text-4xl text-center mb-8">Get In Touch</h1>
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-lg shadow space-y-6">
          <input required placeholder="Name *" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full p-4 border rounded" />
          <input required type="email" placeholder="Email *" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full p-4 border rounded" />
          <input placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full p-4 border rounded" />
          <textarea required rows={5} placeholder="Your project *" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full p-4 border rounded"></textarea>
          <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded font-bold hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}