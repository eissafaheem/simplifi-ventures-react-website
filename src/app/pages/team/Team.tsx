import React from 'react'
import TrapeziumContainer from '../../compenents/trapezium-container/TrapeziumContainer'
import { UI_CONSTANTS } from '../../../utils/Localization'

function Team() {
  return (
    <div>
      <TrapeziumContainer 
      content={UI_CONSTANTS.team[0].content} 
      heading={UI_CONSTANTS.team[0].heading}
      image={UI_CONSTANTS.team[0].image}/>
      <TrapeziumContainer 
      content={UI_CONSTANTS.team[1].content} 
      heading={UI_CONSTANTS.team[1].heading}
      image={UI_CONSTANTS.team[1].image} 
      imageAlign='left'/>
      <TrapeziumContainer
        content={UI_CONSTANTS.team[2].content}
        heading={UI_CONSTANTS.team[2].heading}
        image={UI_CONSTANTS.team[2].image}
        imageAlign='right' />
    </div>
  )
}

export default Team
