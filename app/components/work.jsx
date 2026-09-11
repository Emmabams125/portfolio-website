import { workData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const work = () => {
    return (
        <motion.div
            id='work'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'> My portfolio</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>My Work</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I have worked on a variety of projects, ranging from web applications to mobile apps. Each project has been an opportunity to learn and grow as a developer, and I am proud of the work I have done. Below are some examples of my work, showcasing my skills and expertise in different areas of development.
            </motion.p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-5'>
                {workData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white dark:bg-dark-theme dark:border dark:border-white/30 w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold text-gray-800 dark:text-white'>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-white/70'>{project.description}</p>
                            </div>
                            <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] group-hover:bg-lime-300 transition'>
                                <Image src={assets.send_icon} alt='send icon' className='w-5 dark:invert' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
            <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                href="" className='w-max flex items-center gap-2 text-gray-700 dark:text-white/80 border-[0.5px] border-gray-700 dark:border-white/40 rounded-full py-3 px-10 mx-auto my-20 hover:bg-light-hover dark:hover:bg-dark-hover duration-500'>
                Show more <Image src={assets.right_arrow_bold} alt='Right arrow' className='w-4 dark:invert' />
            </motion.a>
        </motion.div>
    )
}

export default work
