'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'

const locations = [
  {
    city: 'New York',
    address: '680 Fifth Avenue',
    details: 'Upper East Side, NY 10019',
    phone: '+1 (212) 555-0123',
    hours: 'Mon-Sat: 10am-8pm | Sun: 12pm-6pm',
    email: 'nyc@auremio.com'
  },
  {
    city: 'London',
    address: '15 New Bond Street',
    details: 'Mayfair, London W1S 3SX',
    phone: '+44 20 7123 4567',
    hours: 'Mon-Sat: 10am-7pm | Sun: Closed',
    email: 'london@auremio.com'
  },
  {
    city: 'Dubai',
    address: 'Dubai Mall, Fashion Avenue',
    details: 'Downtown Dubai, UAE',
    phone: '+971 4 123 4567',
    hours: 'Daily: 10am-10pm',
    email: 'dubai@auremio.com'
  }
]

const services = [
  {
    title: 'Private Consultations',
    description: 'One-on-one sessions with our master tobacconists',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'VIP Events',
    description: 'Exclusive tastings and product launches',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    )
  },
  {
    title: 'Concierge Service',
    description: 'Personal shopping and delivery assistance',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
]

export default function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="Experience our world-class service and expertise."
        backgroundImage="/images/contact-hero.jpg"
        height="medium"
        align="center"
      />

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Whether you're seeking expert advice or wish to learn more about our services, we're here to assist you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
                  >
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="appointment">Schedule Appointment</option>
                    <option value="vip">VIP Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-light"
                  ></textarea>
                </div>

                <button type="submit" className="luxury-button w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-serif mb-6">VIP Services</h3>
                <div className="space-y-6">
                  {services.map((service) => (
                    <div key={service.title} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gold-light/10 rounded-full flex items-center justify-center text-gold-dark">
                        {service.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-serif mb-1">{service.title}</h4>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif mb-6">Our Locations</h3>
                <div className="space-y-8">
                  {locations.map((location) => (
                    <div key={location.city} className="border-l-2 border-gold-light pl-6">
                      <h4 className="text-lg font-serif mb-2">{location.city}</h4>
                      <p className="text-gray-600 mb-1">{location.address}</p>
                      <p className="text-gray-600 mb-1">{location.details}</p>
                      <p className="text-gray-600 mb-1">{location.phone}</p>
                      <p className="text-gray-600 mb-1">{location.hours}</p>
                      <p className="text-gray-600">{location.email}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="luxury-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Visit Our Flagship Store</h2>
          <p className="text-gray-600 mb-8">
            Experience the epitome of luxury at our New York location.
          </p>
          <div className="aspect-[16/9] bg-gray-200">
            {/* Map would go here - implement with Google Maps or similar */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Interactive Map
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
