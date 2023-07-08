import React from 'react';
import rrm from './Reach.module.css';
import Air from '../../assets/images/air.png'
import Route from '../../assets/images/Route.png'
import Train from '../../assets/images/train.png'

export default function Reach() {
  return (
    <div className={rrm.container}>
        <div className={rrm.heading}>HOW TO REACH /</div>
        <div className={rrm.details}>
            <div className={rrm.train}>
              <div className={rrm.image}><img src={Route} alt="" /></div>
              <div className={rrm.Text}>
              <div className={rrm.travelHeading}>By Road</div>
              <div className={rrm.roadText}>The way to react Falina by road from Delhi is via Noida, 
              Kashipur and then finally Ramnagar. It takes 7-8 hours
               from Delhi to reach Falina Wildlife Sanctuary.</div>
              </div>
            </div>
            <div className={rrm.train}>
              <div className={rrm.image}><img src={Train} alt="" /></div>
              <div className={rrm.Text}>
              <div className={rrm.travelHeading}>By Train</div>
              <div className={rrm.roadText}>Ramnagar is the closest railway station and is well 
              connected to some of the major places like Delhi, Varanasi, Haridwar and Lucknow. However people travelling
               from other parts of India will have to first come to Delhi and then take a connecting train to Ramnagar.</div>
              </div>
            </div>
            <div className={rrm.train}>
              <div className={rrm.image}><img src={Air} alt="" /></div>
              <div className={rrm.Text}>
              <div className={rrm.travelHeading}>By Air</div>
              <div className={rrm.roadText}>The closest airport to Falina is the Pantnagar Airport. 
              There is a daily flight from Delhi to Pantnagar and from there the approx 
              distance to Falina Wildlife National Park is 80 kilometre. One can take a cab and reach there in around two hours.</div>
              </div>
            </div>
        </div>
    </div>
  )
}
