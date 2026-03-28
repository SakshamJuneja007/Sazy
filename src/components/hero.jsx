import React from 'react'
import Back from './Hero bg.png'
import './hero.css'
import LatestCollection from './LatestCollection'
import BestSeller from './BestSeller'
import OurPolicies from './OurPolicies'
import NewsLetterBox from './NewsLetterBox'

const hero = () => {
  return (
    <div>
        <img className='bg2' src={Back} alt="" />
        <LatestCollection />
        <BestSeller />
        <OurPolicies />
        <NewsLetterBox />
    </div>
  )
}

export default hero