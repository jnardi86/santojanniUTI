import { useModulos } from "../../../../hooks/useModulos"


const ContentsSpeakers = () => {

  const { moduleData } = useModulos()

  return (
    <div className="speakersContainer w-full h-auto p-2 mb-20 laptop1:px-20">
      <div className="w-full justify-start mb-10">
        <h2 className="font-poppins font-medium text-Blue text-5xl">Orador/es</h2>
      </div>

      {moduleData.oradores.map(orador => {
        return (
          <div className="speakerCard w-full h-auto flex-col justify-center content-center mb-10">
            <div className="speakerCard-header flex gap-4 mb-6">
              <div className="speakerCard-photo w-[100px] h-auto flex content-center justify-center laptop1:w-[150px]">
                <img src={orador.image} alt={orador.name} className="rounded-full shadow-lightShadow" />
              </div>
              <div className="speakerCard-title flex flex-col justify-center">
                <div className="speakerCard-name">
                  <h3 className="font-poppins text-2xl text-Blue font-semiBold text-start laptop1:text-3xl">{orador.name}</h3>
                </div>
                <div className="speakerCard-speciality">
                  <p className="font-poppins text-base text-Blue font-regular text-start tracking-wider laptop1:text-lg">{orador.especialidad}</p>
                </div>
              </div>
            </div>
            <div className="speakerCard-body">
              <p className="font-poppins text-base text-Blue font-regular text-start" >{orador.cargo}</p>
            </div>
          </div>
        )
      })}



    </div>
  )
}

export default ContentsSpeakers


