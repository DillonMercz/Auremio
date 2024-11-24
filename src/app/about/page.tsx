'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Image from 'next/image'

const values = [
  {
    title: 'Heritage',
    description: 'Drawing from generations of expertise in the art of fine cigars.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Excellence',
    description: 'Committed to sourcing and curating only the finest luxury products.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: 'Expertise',
    description: 'Led by master tobacconists with decades of industry experience.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    )
  },
  {
    title: 'Service',
    description: 'Providing an unparalleled luxury experience for our distinguished clientele.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
]

const team = [
  {
    name: 'Alessandro Romano',
    role: 'Master Tobacconist',
    image: '/images/team-alessandro.jpg',
    bio: 'With over 30 years of experience in curating fine cigars, Alessandro leads our product selection with unparalleled expertise.'
  },
  {
    name: 'Isabella Martinez',
    role: 'Head of Collections',
    image: '/images/team-isabella.jpg',
    bio: 'Isabella brings her refined taste and deep knowledge of luxury goods to curate our exclusive collections.'
  },
  {
    name: 'James Crawford',
    role: 'Client Relations Director',
    image: '/images/team-james.jpg',
    bio: 'James ensures our distinguished clientele receive the personalized attention they deserve.'
  }
]

export default function About() {
  return (
    <div>
      <Hero
        title="Our Story"
        subtitle="A legacy of luxury and excellence in fine cigars."
        backgroundImage="/images/about-hero.jpg"
        height="medium"
        align="center"
      />

      {/* Story Section */}
      <section className="py-20">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif mb-6">The Auremio Legacy</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded on the principles of excellence and authenticity, Auremio has established itself as the premier destination for luxury cigars and accessories. Our journey began with a simple vision: to provide connoisseurs with an unparalleled collection of the world's finest cigars.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Today, we continue to uphold these values, carefully curating each product in our collection to ensure it meets our exacting standards. Our commitment to quality and service has earned us the trust of distinguished clientele worldwide.
              </p>
              <button className="luxury-button">Learn More</button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-[4/3]"
            >
              <Image
                src="/images/about-legacy.jpg"
                alt="Auremio Legacy"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At the heart of Auremio lies a commitment to excellence, expertise, and exceptional service.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 text-gold-dark bg-white rounded-full flex items-center justify-center shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="luxury-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Experts</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals who bring their expertise and dedication to Auremio.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-gold-dark mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-gray-900 text-white py-20">
        <div className="luxury-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Experience Auremio</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We invite you to visit our flagship location and discover the world of luxury cigars with our expert team.
          </p>
          <button className="luxury-button">Schedule a Visit</button>
        </div>
      </section>
    </div>
  )
}
