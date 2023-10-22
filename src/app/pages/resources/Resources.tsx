import React from 'react'
import { UI_CONSTANTS } from '../../../utils/Localization'
import TrapeziumContainer from '../../compenents/trapezium-container/TrapeziumContainer'

function Resources() {
  return (
    <div>
      <TrapeziumContainer
        content={UI_CONSTANTS.resources[0].content}
        heading={UI_CONSTANTS.resources[0].heading}
        image={UI_CONSTANTS.resources[0].image}
        imageAlign='right' />
      <TrapeziumContainer
        content={UI_CONSTANTS.resources[1].content}
        heading={UI_CONSTANTS.resources[1].heading}
        image={UI_CONSTANTS.resources[1].image}
        imageAlign='left' />
      <TrapeziumContainer
        content={UI_CONSTANTS.resources[2].content}
        heading={UI_CONSTANTS.resources[2].heading}
        image={UI_CONSTANTS.resources[2].image}
        imageAlign='right' />
    </div>
  )
}

export default Resources
