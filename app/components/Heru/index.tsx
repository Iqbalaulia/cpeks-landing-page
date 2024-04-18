import React from 'react'
import Image from 'next/image'

export default function Heru() {
  return (
    <div className='h-[calc(100vh-100px)] heru'>

      <div className='w-fit h-fit absolute right-0'>
        {/* display gif */}
        <Image
          alt="Heru"
          src="/images/bola-ungu.gif"
          width={500}
          height={500}
          quality={100}
          className='h-[90vh] w-[90vh] object-cover'
        />
        <Image
          alt="Heru"
          src="/images/logos.png"
          width={459}
          height={454}
          quality={100}
          className='w-[30%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>
      <div className='w-full h-full px-20 py-20'>
        <div className='flex flex-col w-1/2 gap-8 relative z-[10]'>
          <h1 className='text-[80px] leading-[1.1] font-medium text-primary-blue'>
            Transforming
            <br />
            Ideas Into
            <br />
            <span className='text-primary-purple'>
              Digital Brilliance
            </span>
          </h1>
          <p className='text-[20px]'>
            Neque donec libero condimentum imperdiet elementum porta lacus in. Turpis enim in dui sit. Neque donec libero condimentum imperdiet
          </p>
        </div>


      </div>
    </div>
  )
}
