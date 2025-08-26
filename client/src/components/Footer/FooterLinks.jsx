import React from 'react'

const FooterLinks = ({links}) => {
  return (
    <>
      {links.map((links) => (
        <li
            key={links.name}
            className='cursor-pointer transiton-all duration-300 hover:translate-x-[2px]'
        >
            <a href="">{links.name}</a>
        </li>
      ))}
    </>
  );
};

export default FooterLinks
