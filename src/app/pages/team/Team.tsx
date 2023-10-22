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
    </div>
  )
}

export default Team
