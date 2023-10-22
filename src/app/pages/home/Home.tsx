import React from 'react'
import Navbar from '../../compenents/navbar/Navbar'
import TrapeziumContainer from '../../compenents/trapezium-container/TrapeziumContainer'
import { UI_CONSTANTS } from '../../../utils/Localization'
import HomeStyles from './Home.module.css';

function Home() {
  return (
    <div>
      <TrapeziumContainer
        content={UI_CONSTANTS.home[0].content}
        heading={UI_CONSTANTS.home[0].heading}
        image={UI_CONSTANTS.home[0].image} />
      <TrapeziumContainer
        content={UI_CONSTANTS.home[1].content}
        heading={UI_CONSTANTS.home[1].heading}
        image={UI_CONSTANTS.home[1].image}
        imageAlign='left' />

      <div className={HomeStyles["capital"]}>
        <div className={HomeStyles["content"]}>
          <h2>{UI_CONSTANTS.home[2].heading}</h2>
          <p>{UI_CONSTANTS.home[2].content}</p>
        </div>
        <img src={UI_CONSTANTS.home[2].image} alt="" />
      </div>

      <TrapeziumContainer
        content={UI_CONSTANTS.home[3].content}
        heading={UI_CONSTANTS.home[3].heading}
        image={UI_CONSTANTS.home[3].image}
        imageAlign='right' />
      <TrapeziumContainer
        content={UI_CONSTANTS.home[4].content}
        heading={UI_CONSTANTS.home[4].heading}
        image={UI_CONSTANTS.home[4].image}
        imageAlign='left' />
      
      <TrapeziumContainer
        content={UI_CONSTANTS.home[5].content}
        heading={UI_CONSTANTS.home[5].heading}
        image={UI_CONSTANTS.home[5].image}
        imageAlign='right' />
    </div>
  )
}

export default Home
