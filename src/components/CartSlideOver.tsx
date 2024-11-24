'use client'

import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

interface CartItem {
  id: string
  title: string
  price: string
  quantity: number
  image: string
  category: string
}

interface CartSlideOverProps {
  isOpen: boolean
  onClose: () => void
}

// Mock cart data for demonstration
const mockCartItems: CartItem[] = [
  {
    id: '1',
    title: 'Cohiba Behike BHK 52',
    price: '1,250',
    quantity: 1,
    image: '/images/product-cohiba-behike.jpg',
    category: 'Premium Cigars'
  }
]

const slideOverVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    x: '100%',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
    },
  },
}

export default function CartSlideOver({ isOpen, onClose }: CartSlideOverProps) {
  const subtotal = mockCartItems.reduce((total, item) => 
    total + (parseFloat(item.price.replace(',', '')) * item.quantity), 0
  )
  const shipping = subtotal >= 500 ? 0 : 25
  const total = subtotal + shipping

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <motion.div
                    variants={slideOverVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="flex h-full flex-col bg-white shadow-xl"
                  >
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-serif">Shopping Cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </motion.button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <AnimatePresence>
                            {mockCartItems.length > 0 ? (
                              <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {mockCartItems.map((item) => (
                                  <motion.li
                                    key={item.id}
                                    variants={itemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="flex py-6"
                                  >
                                    <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-gray-100">
                                      <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base">
                                          <div>
                                            <h3 className="font-serif">{item.title}</h3>
                                            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
                                          </div>
                                          <p className="ml-4">${item.price}</p>
                                        </div>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <div className="flex items-center space-x-2">
                                          <select
                                            value={item.quantity}
                                            onChange={() => {}}
                                            className="rounded-sm border border-gray-300 text-left text-base focus:outline-none focus:ring-2 focus:ring-gold-light"
                                          >
                                            {[1, 2, 3, 4, 5].map((num) => (
                                              <option key={num} value={num}>
                                                {num}
                                              </option>
                                            ))}
                                          </select>
                                        </div>

                                        <motion.button
                                          whileHover={{ scale: 1.05 }}
                                          whileTap={{ scale: 0.95 }}
                                          type="button"
                                          className="font-medium text-gold-dark hover:text-gold-light"
                                        >
                                          Remove
                                        </motion.button>
                                      </div>
                                    </div>
                                  </motion.li>
                                ))}
                              </ul>
                            ) : (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-12"
                              >
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                  />
                                </svg>
                                <h3 className="mt-2 text-sm font-medium text-gray-900">Your cart is empty</h3>
                                <p className="mt-1 text-sm text-gray-500">Start adding some luxury items to your cart</p>
                                <div className="mt-6">
                                  <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={onClose}
                                    className="luxury-button"
                                  >
                                    Continue Shopping
                                  </motion.button>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {mockCartItems.length > 0 && (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>${subtotal.toLocaleString()}</p>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <p>Shipping</p>
                          <p>{shipping === 0 ? 'Free' : `$${shipping}`}</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900 mt-4 pt-4 border-t border-gray-200">
                          <p>Total</p>
                          <p>${total.toLocaleString()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <motion.a
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            href="/checkout"
                            className="flex items-center justify-center luxury-button w-full"
                          >
                            Proceed to Checkout
                          </motion.a>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or{' '}
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              className="font-medium text-gold-dark hover:text-gold-light"
                              onClick={onClose}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </motion.button>
                          </p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
