import React from 'react'
import Image from 'next/image'

const Hero:React.FC = () => {

  return (
    <section className="w-full bg-gray-900 text-white bg-[url('/assets/images/pexels-fauxels-3182743.jpg')] bg-cover">
      <div
        className="max-w-[85rem] mx-auto px-4 py-32 lg:flex lg:h-screen lg:items-center"
      >
        <div className="mx-auto max-w-3xl text-left">
          {/* <h1
            className="bg-gradient-to-r from-red-300 via-red-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl uppercase"
          >
            XKSDIGITAL
          </h1> 

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
            tenetur fuga ducimus numquam ea!
          </p>*/}
        </div>
      </div>
    </section>
  )
}

export default Hero