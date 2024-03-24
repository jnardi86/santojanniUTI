import React from 'react'
import OradoresCard from './OradoresCard'
import oradores from './dataOradores.json'

const HomeOradores = () => {

  return (
    <div className="aboutContainer w-full h-auto flex-column justify-center content-center mb-20">
      <div className="aboutContainerHeader w-full h-auto text-center p-2 mb-12">
        <h1 className="font-poppins font-medium text-Blue text-[52px]">Nuestros oradores</h1>
      </div>
      <div className="flex justify-center flex-wrap">
        {oradores.map((orador, index) => {
          return (
            <OradoresCard
              key={index}
              data={orador}
            />
          )
        })}
      </div>
    </div>
  )
}

export default HomeOradores
