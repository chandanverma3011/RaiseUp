import React from 'react'
import { motion } from 'framer-motion'

const FadeAnimation = (delay) =>
{
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};
const OurVision = () => {
  return (
    <div className='container my-16 bg-white dark:bg-gray-900 dark:text-white'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
        <motion.div
        variants={FadeAnimation(0.2)}
        initial="initial"
        whileInView="animate"
        className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-green-800 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Vision</h1>
            <p>
                To create a transparent and accessible platform that connects donors with those in need, fostering a culture of compassion, accountability, and collective impact—so that every act of giving contributes to building a better, fairer, and more supportive world.
            </p>
            <a 
            href="#" className='inline-block hover:text-cyan-400 border-b hover:border-cyan-400'
            >
            Learn More
            </a>
        </motion.div>
        <motion.div 
        variants={FadeAnimation(0.4)}
        initial="initial"
        whileInView="animate"
        className='mx-5 md:mx-8 px-6 py-10 space-y-4 shadow-lg border-t-8 border-purple-800 dark:bg-slate-800'>
            <h1 className='text-xl font-semibold'>Our Vision</h1>
            <p>
                To empower individuals and communities by simplifying the act of giving, ensuring that every contribution—big or small—creates meaningful change and drives sustainable social development.
            </p>
             <a 
            href="#" className='inline-block hover:text-cyan-400 border-b hover:border-cyan-400'
            >
            Learn More
            </a>
        </motion.div>
      </div>
    </div>
  )
}

export default OurVision