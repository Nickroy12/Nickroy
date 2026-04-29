import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import errorPng from '@/public/error.png'

const NotFound = () => {
  return (
    <div className='h-[80vh] w-10/12 mx-auto rounded-4xl flex justify-center items-center shadow flex-col  space-y-4'>
       <Image src={errorPng} width={400} alt='error' />
        <Link href={'/'}>
         <button className="btn bg-gray-500 text-white">Back</button>
        </Link>

    </div>
  )
}

export default NotFound