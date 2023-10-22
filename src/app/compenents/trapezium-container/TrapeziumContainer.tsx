import React from 'react'
import { useTrapeziumContainerHook } from './TrapeziumContainer.hook';
import TrapeziumConatinerStyles from './TrapeziumContainer.module.css';

export type TrapeziumContainerProps = {
  heading: string,
  content: string,
  image: string,
  imageAlign?: "left" | "right"
}

function TrapeziumContainer(props: TrapeziumContainerProps) {

  const { heading, content, image, imageAlign  } = useTrapeziumContainerHook(props);

  return (
    <div className={`${TrapeziumConatinerStyles['trapezium-container']} ${imageAlign === 'left' && TrapeziumConatinerStyles['trapezium-container-left']}` }>
      <div className={TrapeziumConatinerStyles["matter"]}>
        <h2>
          {heading}
        </h2>
        <p>
          {content}

        </p>

      </div>
      <div className={TrapeziumConatinerStyles["image"]}>
        <img src={image} alt="" />

      </div>
    </div>
  )
}

export default TrapeziumContainer
