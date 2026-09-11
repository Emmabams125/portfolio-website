import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <motion.div
      id='services'
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg font-ovo'> What I offer</motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl font-ovo'>My Services</motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I offer a range of services to help bring your ideas to life. Whether you need a website, a mobile app, or a custom software solution, I'm here to assist you every step of the way.
      </motion.p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className='min-w-0 border border-gray-400 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white'>
            <Image src={icon} alt='' className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/70'>{description}</p>
            <a href={link} className='flex items-center gap-2 text-sm mt-5'>
              Read More <Image src={assets.right_arrow} alt='' className='w-4 dark:invert' />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services