import React from 'react'
import Img1 from "../assets/blogs/blog1.jpeg";
import Img2 from "../assets/blogs/blog2.jpeg";
import Img3 from "../assets/blogs/blog3.jpeg";
import BlogCard from './BlogCard';

const BlogData = [
   {
        img: Img1,
        title:
          "Breaking the Cycle of Poverty: Towards an Inclusive Future",
        description:
          "Poverty remains one of the biggest challenges worldwide, affecting access to food, education, healthcare, and opportunities for a better life. It is not just about lack of income, but also about limited resources, inequality, and social exclusion. Addressing poverty requires a multidimensional approach—empowering communities with education, creating sustainable employment, ensuring equal opportunities, and promoting social justice. By breaking this cycle, societies can move towards a future that is inclusive, fair, and prosperous for all.",  
        writer:"Mark"  
   },
   {
        img: Img2,
        title:
          "Poverty: A Barrier to Human Development",
        description:
          "Poverty is more than just financial hardship—it limits access to education, healthcare, and opportunities for growth, trapping individuals and communities in cycles of deprivation. It widens inequality and prevents societies from achieving sustainable development. Tackling poverty requires collective efforts through government policies, community support, and global cooperation to ensure that every individual has the chance to live with dignity and hope",  
        writer:"Altman"  
   },
     {
        img: Img3,
        title:
          "From Poverty to Prosperity: The Road to Equality",
        description:
          "Millions around the world continue to suffer the harsh realities of poverty, facing hunger, unemployment, and lack of basic amenities. Poverty not only weakens individuals but also hinders national progress. By focusing on skill development, economic reforms, and social welfare, societies can transform poverty into prosperity. Building an equal and fair system ensures that growth benefits all, leaving no one behind.",  
        writer:"Smith"  
   },   
];
const Blogs = () => {
 return (
  <div className='dark:bg-gray-900 dark:text-white'>
    <div className='conatiner py-8'>
       <h1 className='mb-8 border-l-8 pl-2 text-center text-3xl font-bold'>Our Latest Blogs
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
        {BlogData.map((blog) => (
          <BlogCard
            key={blog.title}
            img={blog.img}
            title={blog.title}
            description={blog.description}
            date={blog.date}
            writer={blog.writer}
          />
        ))}
      </div>
    </div>
 </div>
)
}

export default Blogs

