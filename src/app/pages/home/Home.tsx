import React from 'react'
import Navbar from '../../compenents/navbar/Navbar'
import TrapeziumContainer from '../../compenents/trapezium-container/TrapeziumContainer'
import image1 from './../../../assets/home-img1.svg'

function Home() {
  return (
    <div>
      <Navbar/>
      <TrapeziumContainer content='We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry.
' heading='Incubating innovative solutions for financial services' image={image1} />
      <TrapeziumContainer content='We are a business-to-business fintech focused venture studio. Our mission is to enable digital transformation in the banking industry.
' heading='Incubating innovative solutions for financial services' image={image1} imageAlign='left'/>
    </div>
  )
}

export default Home
