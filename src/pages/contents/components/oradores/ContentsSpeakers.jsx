import { useModulos } from "../../../../hooks/useModulos"


const ContentsSpeakers = () => {

  const { speakerPhoto, speakerName, speakerSpeciality, speakerDescription } = useModulos()

  return (
    <div className="speakersContainer w-full h-auto p-2 laptop1:px-40">
      <div className="speakerCard w-full h-auto flex-col justify-center content-center">
        <div className="speakerCard-header flex gap-4 mb-6">
          <div className="speakerCard-photo w-[120px] h-auto flex content-center justify-center laptop1:w-[204px]">
            <img src={speakerPhoto} alt={speakerName} className="rounded-full shadow-lightShadow" />
          </div>
          <div className="speakerCard-title flex flex-col justify-center">
            <div className="speakerCard-name">
              <h3 className="font-poppins text-2xl text-Blue font-semiBold text-start laptop1:text-3xl">{speakerName}</h3>
            </div>
            <div className="speakerCard-speciality">
              <p className="font-poppins text-base text-Blue font-regular text-start tracking-wider laptop1:text-lg">{speakerSpeciality}</p>
            </div>
          </div>
        </div>
        <div className="speakerCard-body">
          <p className="font-poppins text-base text-Blue font-regular text-start" >{speakerDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default ContentsSpeakers


