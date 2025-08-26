import React from 'react'

const VideoBanner = () => {
  return (
    <div className='bg-orange-300'>
      <div className="container py-8 md:py-16">
        <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-4 md:gap-8'>
          {/*video section*/}
          <div>
            <iframe 
              src="https://www.youtube.com/embed/WMRXEwY6eVw?si=xw2HNQqTm2xVNV2I" 
              title="YouTube video player" 
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className='aspect-video w-full'
            ></iframe>
          </div>
          {/*video section*/}
          <div className='space-y-4 text-center md:text-left text-white dark:'>
            <h1 className='text-4xl font-bold'>Watch Our Video</h1>
            <p>
              Dhobi Ghat — one of the world’s largest open-air laundries. The creator visits this place where workers toil under harsh conditions, physically bearing the brunt so that clean clothes reach ours. It’s a raw, impactful look into their sacrifices and daily struggles — a story that might genuinely change how you think about where your laundry comes from
            </p>
            <button className='btn-primary !bg-white !text-black'>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoBanner