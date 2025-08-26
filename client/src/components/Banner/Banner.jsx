import React from 'react'
import Image2 from '../../assets/blogs/blog4.jpeg';
import Image from '../../assets/image2.jpeg';

const Banner = () => {
  return (
    <div className='bg-slate-100 dark:bg-slate-900 dark:text-white'>
        <div className='container md:h-[500px] flex items-center justify-center py-10'>
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
                {/*img container*/}
                <div>
                    <img src={Image2}
                    alt=""
                    className='mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl' 
                    />
                </div>
                {/*text container*/}
                <div className='lg:max-w-[400px] space-y-6'>
                    <h1 className='text-2xl font-semibold md:text-4xl mb-5'>Help the Needy People</h1>
                    <ul className='flex list-inside list-disc flex-col gap-2 md:gap-4'>
                        <li className='font-medium'>
                            Provide Basic Necessities – Offer food, clean water, clothing, and shelter to those struggling to survive.
                        </li>
                        <li className='font-medium'>
                            Support Education & Skills – Help them gain knowledge or vocational skills so they can build a better future.
                        </li>
                        <li className='font-medium'>
                           Show Empathy & Care – Sometimes a kind word, guidance, or emotional support can give them hope and dignity. 
                        </li>
                    </ul>
                    <button className='btn-primary'>Get Started</button>
                </div>
            </div>
        </div>
    </div>
  )
};

export default Banner;
