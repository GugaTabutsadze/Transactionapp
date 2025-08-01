import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#f1faff] border-t border-[#0096fb]/10'>
      <div className='mx-auto max-w-6xl px-4 sm:px-6'>
        <div>
          <div className='py-12 md:py-20'>
            <div className='text-center mb-8'>
              <h1 className='text-4xl md:text-6xl font-bold text-[#174773]
                  mb-4'>
                Transaction
              </h1>
              <p className='text-[#174773] text-lg md:text-xl max-w-[650px] mx-auto opacity-80'>
                Take control of your finances with the ultimate financial management tool.
              </p>
            </div>
              <FooterItems />
            <div className='border-t border-[#0096fb]/30 pt-8 text-center'>
                <p className='text-[#174773] opacity-80'>
                 © 2025 Vorifi. All rights reserved. 
                 Made with ❤️ for better financial management.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

const FooterItems = () => {
  const sections = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Demo'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Contact', 'FAQ'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security'],
    },
  ];

  return (
    <div className='grid md:grid-cols-4 gap-8 mt-12 mb-8'>
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className='text-xl font-bold text-[#174773] mb-4'>{section.title}</h3>
          <ul className='flex flex-col space-y-2'>
            {section.links.map((link) => (
              <li key={link}>
                <Link
                  className='text-[#174773] opacity-80 hover:opacity-100 transition-all duration-300'
                  href='/'
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

