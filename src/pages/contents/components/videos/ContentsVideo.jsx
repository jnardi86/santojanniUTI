import { useModulos } from "../../../../hooks/useModulos"
import VideoItem from "./VideoItem";


const ContentsVideo = () => {

  const {
    moduleData
  } = useModulos()

  console.log(moduleData.multimedia)


  return (
    <div>
      {moduleData.multimedia.map((item, index) => (
        
        <VideoItem
          key={index}
          title={item.moduleVideoTitle}
          url={item.moduleVideoUrl}
          imgVideo={item.moduleVideoImg}
          availableTime={item.moduleVideoTimeAvailable}
          isLocked={item.isLocked == "true" ? true : false}
        />
        
      ))}
    </div>
  )
}

export default ContentsVideo