import React from 'react'
import Card from '@/ui/Card'
import data from '@/data/data.json'
import Marquee from 'react-fast-marquee'

const Knowlege = () => {
  return (
    <div className="w-10/12 mx-auto relative overflow-hidden p-5">
      <h1 className="text-4xl dark:text-white font-bold mb-6">
        What I Know
      </h1>

      {/* Left Fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-base-100 dark:from-black to-transparent" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-base-100 dark:from-black to-transparent" />

      <div className="rotate-2 space-y-5">
        <Marquee pauseOnHover={true}>
          <div className="flex gap-6 px-3">
            {data.slice(0, 5).map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </Marquee>

        <Marquee direction="right" pauseOnHover={true}>
          <div className="flex gap-6 px-3">
            {data.slice(5, 10).map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Knowlege