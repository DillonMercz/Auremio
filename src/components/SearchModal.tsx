'use client'

import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface SearchResult {
  id: string
  title: string
  category: string
  price: string
  image: string
}

// Mock data for demonstration
const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Cohiba Behike BHK 52',
    category: 'Premium Cigars',
    price: '1,250',
    image: '/images/product-cohiba-behike.jpg'
  },
  {
    id: '2',
    title: 'S.T. Dupont Lighter',
    category: 'Accessories',
    price: '895',
    image: '/images/product-st-dupont-lighter.jpg'
  },
  {
    id: '3',
    title: 'Elie Bleu Humidor',
    category: 'Humidors',
    price: '3,500',
    image: '/images/product-elie-bleu-humidor.jpg'
  }
]

const popularSearches = [
  'Cohiba', 'Davidoff', 'Limited Edition', 'Humidors', 'Gift Sets',
  'Lighters', 'Cutters', 'Travel Cases'
]

interface SearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    if (query.length > 2) {
      setIsLoading(true)
      // Simulate API call
      setTimeout(() => {
        setResults(mockResults.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        ))
        setIsLoading(false)
      }, 500)
    } else {
      setResults([])
    }
  }, [query])

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-screen items-start justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all mt-[10vh]">
                <div className="relative">
                  {/* Search Input */}
                  <div className="relative">
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search for luxury cigars and accessories..."
                      className="w-full p-4 text-lg border-b border-gray-200 focus:outline-none focus:border-gold-light pr-12"
                      autoFocus
                    />
                    <motion.div
                      className="absolute right-4 top-1/2 -translate-y-1/2"
                      animate={{ rotate: isLoading ? 360 : 0 }}
                      transition={{ duration: 1, repeat: isLoading ? Infinity : 0, ease: "linear" }}
                    >
                      {isLoading ? (
                        <svg className="w-6 h-6 text-gold-light" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      )}
                    </motion.div>
                  </div>
                  
                  {/* Quick Links */}
                  {query.length === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="py-8"
                    >
                      <h3 className="text-sm font-medium text-gray-500 mb-4">POPULAR SEARCHES</h3>
                      <div className="flex flex-wrap gap-2">
                        {popularSearches.map((term) => (
                          <motion.button
                            key={term}
                            onClick={() => setQuery(term)}
                            className="px-4 py-2 bg-gray-100 hover:bg-gold-light hover:text-white text-sm rounded-full transition-colors duration-200"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {term}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Results */}
                  <div className="mt-4">
                    <AnimatePresence mode="wait">
                      {isLoading ? (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="py-20 text-center text-gray-500"
                        >
                          Searching for luxury items...
                        </motion.div>
                      ) : results.length > 0 ? (
                        <motion.div
                          key="results"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                          {results.map((result, index) => (
                            <motion.div
                              key={result.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group flex items-center space-x-4 p-4 hover:bg-gray-50 cursor-pointer rounded-sm"
                            >
                              <div className="relative w-20 h-20">
                                <Image
                                  src={result.image}
                                  alt={result.title}
                                  fill
                                  className="object-cover rounded-sm"
                                />
                              </div>
                              <div>
                                <p className="text-sm text-gray-500">{result.category}</p>
                                <h3 className="font-serif group-hover:text-gold-dark transition-colors duration-200">
                                  {result.title}
                                </h3>
                                <p className="text-sm">${result.price}</p>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      ) : query.length > 2 ? (
                        <motion.div
                          key="no-results"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="py-20 text-center text-gray-500"
                        >
                          No results found for "{query}"
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>

                  {/* Close Button */}
                  <motion.button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <span className="sr-only">Close</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
