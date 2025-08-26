import React from 'react'

const BlogCard = ({img, title, description, date, writer}) => {
  return (
    <div className='p-5 rounded-2xl bg-white shadow-md transition-all duration-500 hover:shadow-2xl dark:bg-slate-900 dark:text-white'>
      <div className='overflow-hidden rounded-xl'>
        <img 
          src={img} 
          alt=""  
          className='mx-auto h-[220px] w-full object-cover transition duration-700 hover:scale-105'
        />
      </div>
      <div className='flex justify-between items-center pt-3 text-gray-500 text-xs dark:text-gray-400'>
        <p>{date}</p>
        <p className='truncate'>by {writer}</p>
      </div>
      <div className='space-y-2 pt-3'>
        <h1 className='text-lg font-semibold line-clamp-1'>{title}</h1>
        <p className='text-sm text-gray-600 dark:text-gray-300 line-clamp-2'>{description}</p>
      </div>
    </div>
  )
}

export default BlogCard
