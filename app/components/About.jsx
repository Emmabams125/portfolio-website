import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            id='about'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'> Introduction</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>About me</motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='w-64 sm:w-80 rounded-3-xl max-w-none'>
                    <Image src={assets.profile_img} alt='user' className='w-full rounded-3xl' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className='flex-1'>
                    <p className='mb-10 max-w-2xl font-ovo'>
                        I'm a fullstack developer who builds and ships complete products end-to-end from mobile apps to web platforms. I have a strong passion for technology and a drive to create innovative solutions that make a positive impact on people's lives. With a keen eye for detail and a commitment to delivering high-quality work, I strive to exceed expectations and deliver exceptional results.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <motion.li 
                                key={index} 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className='border-[0.5px] border-gray-400 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-light-hover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:bg-dark-hover dark:hover:shadow-white '
                            >
                                <Image src={iconDark} alt={title} className='w-7 mt-3 hidden dark:block' />
                                <Image src={icon} alt={title} className='w-7 mt-3 dark:hidden' />
                                <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                <p className='text-gray-600 text-sm dark:text-white/70'>{description}</p>
                            </motion.li>
                        ))}
                    </motion.ul>
                    <h4 className='my-6 text-gray-700 dark:text-white/80 font-ovo'>
                        Tools I use
                    </h4>
                    <ul className='flex flex-wrap items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                                <Image src={tool} alt='Tool' className='w-7' />
                            </li>
                        ))}

                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>

    )
}

export default About
