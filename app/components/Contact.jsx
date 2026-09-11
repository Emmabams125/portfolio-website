import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "3a3df39a-d6a8-4837-abf1-a7208b6f5f46");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
            } else {
                console.error("Web3Forms error:", data);
                setResult(data.message || "Something went wrong.");
            }
        } catch (error) {
            console.error(error);
            setResult("Network error — please try again.");
        }
    };
    return (
        <motion.div
            id='contact'
            className='w-full px-[12%] py-10 scroll-mt-20 relative'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <div className='absolute inset-0 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-[length:90%_auto] bg-center dark:hidden -z-10' />
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'> Connect with me</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>Get in touch</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out to me through any of the platforms below, and I will get back to you as soon as possible.
            </motion.p>

            <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='max-w-2xl mx-auto' onSubmit={onSubmit}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                    <input type="text" placeholder=' Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-dark-hover dark:text-white' name='name' />
                    <input type="email" placeholder=' Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-dark-hover dark:text-white' name='email' />
                </div>

                <textarea placeholder=' Enter your message' rows="6" required className='w-full p-4 outline-none border-[0.5px] border-gray-400 dark:border-white/30 rounded-md bg-white dark:bg-dark-hover dark:text-white mb-6' name='message'></textarea>

                <button type="submit" className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-white dark:text-black dark:hover:bg-white/80'>Send Message <Image src={assets.right_arrow_white} alt="" className='w-4 dark:invert' /></button>

                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact
