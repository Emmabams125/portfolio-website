import React, { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Image from 'next/image'
import { assets, socialLinks, tiktokVideos } from '@/assets/assets'
import { motion } from 'framer-motion'

const getTikTokId = (url) => {
    const match = url.match(/\/(?:video|photo)\/(\d+)/)
    return match ? match[1] : ''
}

const EmbedCard = ({ url, widthClass, children }) => {
    const containerRef = useRef(null)
    const [loaded, setLoaded] = useState(false)
    const [timedOut, setTimedOut] = useState(false)

    useEffect(() => {
        const node = containerRef.current
        if (!node) return

        const MIN_HEIGHT = 40
        let resizeObserver

        const checkIframe = (iframe) => {
            if (iframe.offsetHeight > MIN_HEIGHT) {
                setLoaded(true)
                mutationObserver.disconnect()
                resizeObserver?.disconnect()
            }
        }

        const mutationObserver = new MutationObserver(() => {
            const iframe = node.querySelector('iframe')
            if (!iframe) return
            checkIframe(iframe)
            if (!resizeObserver) {
                resizeObserver = new ResizeObserver(() => checkIframe(iframe))
                resizeObserver.observe(iframe)
            }
        })
        mutationObserver.observe(node, { childList: true, subtree: true })

        const timer = setTimeout(() => {
            const iframe = node.querySelector('iframe')
            if (!iframe || iframe.offsetHeight <= MIN_HEIGHT) setTimedOut(true)
        }, 15000)

        return () => {
            mutationObserver.disconnect()
            resizeObserver?.disconnect()
            clearTimeout(timer)
        }
    }, [])

    const showFallback = timedOut && !loaded

    return (
        <div
            className={`shrink-0 snap-center leading-none ${widthClass} rounded-2xl overflow-hidden border-[0.5px] border-gray-400 dark:border-white/30`}
        >
            {showFallback ? (
                <a
                    href={url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex aspect-[9/16] flex-col items-center justify-center gap-2 bg-light-hover text-center text-sm text-gray-600 duration-500 hover:bg-light-hover dark:bg-dark-hover dark:text-white/70 p-6'
                >
                    <span>Preview blocked by your browser</span>
                    <span className='underline'>Open the original post</span>
                </a>
            ) : (
                <div ref={containerRef} className='block leading-none'>{children}</div>
            )}
        </div>
    )
}

const Socials = () => {
    return (
        <motion.div
            id='socials'
            className='w-full px-[12%] py-10 scroll-mt-20'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
        >
            <motion.h4
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'> Follow along</motion.h4>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>My Socials</motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I share build logs, dev life, and behind-the-scenes content on TikTok. Give me a follow to keep up with what I'm building.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className='flex items-center justify-between mb-5'>
                    <div className='flex items-center gap-3'>
                        <Image src={assets.tiktok} alt='TikTok' className='w-9 h-9 rounded-lg' />
                        <div>
                            <h3 className='font-semibold text-gray-800 dark:text-white'>TikTok</h3>
                            <p className='text-sm text-gray-600 dark:text-white/70'>{socialLinks.tiktok.handle}</p>
                        </div>
                    </div>
                    <a
                        href={socialLinks.tiktok.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-sm border-[0.5px] border-gray-400 dark:border-white/30 rounded-full py-2 px-5 hover:bg-light-hover dark:hover:bg-dark-hover duration-500'
                    >
                        Follow
                    </a>
                </div>

                <div className='flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory'>
                    {tiktokVideos.map((url) => (
                        <EmbedCard key={url} url={url} widthClass='w-[260px] sm:w-[325px]'>
                            <blockquote
                                className='tiktok-embed'
                                cite={url}
                                data-video-id={getTikTokId(url)}
                                style={{ maxWidth: '325px', minWidth: '260px', margin: 0 }}
                            >
                                <section></section>
                            </blockquote>
                        </EmbedCard>
                    ))}
                </div>
            </motion.div>

            <Script
                src='https://www.tiktok.com/embed.js'
                strategy='afterInteractive'
            />
        </motion.div>
    )
}

export default Socials
