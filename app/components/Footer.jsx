import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className='mt-20 text-center'>
                <span className='relative inline-block h-20 w-36'>
                    <Image src={assets.logo} alt='EmmaBams' fill className='object-cover invert mix-blend-multiply dark:invert-0 dark:mix-blend-screen' />
                </span>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon_dark} alt='' className='w-6 hidden dark:block' />
                    <Image src={assets.mail_icon} alt='' className='w-6 dark:hidden' />
                    emmanuelbamiduro@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/20 mx-[10%] mt-12 py-6'>
                <p>
                    &copy; {new Date().getFullYear()} EmmaBams. All rights reserved.
                </p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a target='_blanck' href='https://github.com/Emmabams125'>GitHub</a></li>
                    <li><a target='_blanck' href='https://www.linkedin.com/in/emmanuel-bamiduro-1575a6232/'>LinkedIn</a></li>
                    <li><a target='_blanck' href='https://x.com/EmmaBamz'>Twitter</a>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Footer
