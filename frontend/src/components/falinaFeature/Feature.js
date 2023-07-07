import React from 'react'
import mrr from './Feature.module.css'

export default function Feature() {
  return (
    <div>
        <div className={mrr.container}>
            <div className={mrr.write}>

            <div className={mrr.terrain}>-ABOUT THE TERRAIN</div>
            <div className={mrr.featureHeading}>FALINA FEATURES</div>
            <div className={mrr.featurePara}>Located in the district of Nainital, Falina Wildlife Sanctuary is a perfect place 
                for nature enthusiasts and wildlife lovers. It is a wonderful place in India considered as a hub of excitement and thrill. 
                Spread over an area of 520 square kilometres, the park is a complete package for wildlife buffs. However, tourism is only 
                allowed in the earmarked areas of the Falina Tiger Reserve to maximize the chances of viewing its splendid landscape 
                and the diverse wildlife living in the park.</div>
            <div className={mrr.climate}>
                <div className={mrr.temp}>
                    <h1>Temperature</h1>
                    <p><span>4</span> to <span>42</span>°C ranges in winter to summer.</p>
                </div>
                <div className={mrr.rain}>
                    <h1>Rainfall</h1>
                    <p><span>1400-2800</span>mm around the year.</p>
                </div>
                <div className={mrr.sea}>
                    <h1>Sea Level</h1>
                    <p><span>385-1100</span>m above mean sea level.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
