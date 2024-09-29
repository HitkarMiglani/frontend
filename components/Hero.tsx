import React from 'react'
import { Spotlight } from './ui/Spotlight'


export const Hero = () => {
  return (

    <div>
      <div className='pb-30 pt-36'>
          <div>
              <Spotlight className='-top-40 -left-10' fill='white' />
              {/* <Spotlight className='-top-10 -left-full h-[80vh] w-[50vw] ' fill='purple'/>
              <Spotlight className='top-28 -left-80  h-[80vh] w-[50vw]  ' fill='blue' />*/}
              <Spotlight className='top-10 left-full h-[80vh] w-[50vw] ' fill='purple' />
              <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
          </div>
      </div>
  

    </div>
  )
}
