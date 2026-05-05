import React from 'react'
import Card from '@/ui/Card'
import data from '@/data/data.json'
import Marquee from 'react-fast-marquee'
const Knowlege = () => {
  return (
        <div className="overflow-hidden p-5">
      <h1 className="text-4xl font-bold mb-6">What I Know</h1>

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