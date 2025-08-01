import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='scroll-mt-[100px] mx-auto max-w-6xl px-4 sm:px-6'>
    <div className='py-12 md:py-20'>
      <div className='text-center mb-12'>
        <h1 className='text-5xl md:text-7xl font-bold text-[#17773] mb-4 inline-block
            transition-all duration-1000'>
          Get In Touch
        </h1>
        <p className='text-[#174773] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-80
           transition-all duration-1000 dleey-300'>
          Have questions or feedback? 
          I'd love to hear from you!
        </p>
      </div>
      <div className='grid md:grid-cols-2 gap-6 items-center'>
        <div className='border-2 border-[#0096fb] transform hover:scale-105 
             transition-all duration-300 rounded-xl p-6 shadow-lg bg-white/80'>
          <h2 className='text-3xl font-bold text-[#174773] mb-4'>
             Contact Information
          </h2>
          <div className='flex flex-col space-y-4'>
            <div className='flex items-center space-x-4'>
                <div className='w-12 h-12 bg-[#0096fb] rounded-lg flex items-center justify-center'>
                  <img 
                    className='w-6 h-6'
                    src="/images/mail.png"
                    alt='mail' 
                    />
                </div>
                <div>
                  <p className='text-lg font-semibold text-[#174773]'>Email</p>
                  <p className='text-[#174773] opacity-80'>Transaction@gmail.com</p>
                </div>
            </div>
            <div className='flex items-center space-x-4'>
               <div className='w-12 h-12 bg-[#0096fb] rounded-lg flex items-center justify-center'>
                  <img 
                    className='w-6 h-6'
                    src="/images/location.png"
                    alt='mail' 
                    />
               </div>
               <div>
                <p className='text-lg font-semibold text-[#174773]'>Location</p>
                <p className='text-[#174773] opacity-80'>Remote / Worldwide</p>
               </div>
            </div>
            <div className='flex items-center space-x-4'>
              <div className='w-12 h-12 bg-[#0096fb] rounded-lg flex items-center justify-center'>
                 <img 
                    className='w-6 h-6'
                    src="/images/clock.png"
                    alt='mail' 
                    />
              </div>
              <div>
                <p className='text-lg font-semibold text-[#174773]'>Response Time</p>
                <p className='text-[#174773] opacity-80'>24 Hour</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-2 border-[#0096fb] transform hover:scale-105 
             transition-all duration-300 rounded-xl p-6 shadow-lg bg-white/80'>
          <h2 className='text-3xl font-bold text-[#174773] mb-6'>Send a Message</h2>
          <form className='flex flex-col space-y-4'>
            <div>
              <label htmlFor='name' className='block text-lg font-semibold text-[#174773] mb-2'>
                Name
              </label>
              <input
                className='w-full px-4 py-3 rounded-lg border-2 border-[#3a3a3a]
                focus:outline-none transition-all duration-300 bg-[#3a3a3a]
                text-[#a3a3a3] font-semibold'
                placeholder='Your name' 
                type='text' 
                />
            </div>
            <div>
               <label htmlFor='email' className='block text-lg font-semibold text-[#174773] mb-2'>
                Email
              </label>
              <input
                className='w-full px-4 py-3 rounded-lg border-2 border-[#3a3a3a]
                focus:outline-none transition-all duration-300 bg-[#3a3a3a]
                text-[#a3a3a3] font-semibold'
                placeholder='Your email' 
                type='email' 
                />
            </div>
            <div>
              <label htmlFor='message' className='block text-lg font-semibold text-[#174773] mb-2'>
                Message
              </label>
              <textarea className='w-full px-4 py-3 rounded-lg border-2 border-[#3a3a3a]
                focus:outline-none transition-all duration-300 bg-[#3a3a3a]
                text-[#a3a3a3] font-semibold resize-none'
                placeholder='Send Message' rows={4}>
              </textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
