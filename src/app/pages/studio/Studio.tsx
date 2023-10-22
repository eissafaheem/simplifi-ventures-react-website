import React from 'react'
import TrapeziumContainer from '../../compenents/trapezium-container/TrapeziumContainer'
import { UI_CONSTANTS } from '../../../utils/Localization'

function Studio() {
  return (
    <div>
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[0].content}
        heading={UI_CONSTANTS.studio[0].heading}
        image={UI_CONSTANTS.studio[0].image}
        imageAlign='right' />
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[1].content}
        heading={UI_CONSTANTS.studio[1].heading}
        image={UI_CONSTANTS.studio[1].image}
        imageAlign='left' />
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[2].content}
        heading={UI_CONSTANTS.studio[2].heading}
        image={UI_CONSTANTS.studio[2].image}
        imageAlign='right' />
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[3].content}
        heading={UI_CONSTANTS.studio[3].heading}
        image={UI_CONSTANTS.studio[3].image}
        imageAlign='left' />
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[4].content}
        heading={UI_CONSTANTS.studio[4].heading}
        image={UI_CONSTANTS.studio[4].image}
        imageAlign='right' />
        <TrapeziumContainer
        content={UI_CONSTANTS.studio[5].content}
        heading={UI_CONSTANTS.studio[5].heading}
        image={UI_CONSTANTS.studio[5].image}
        imageAlign='left' />
    </div>
  )
}

export default Studio
