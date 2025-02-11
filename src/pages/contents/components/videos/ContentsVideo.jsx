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
          description={item.moduleVideoDescription}
          url={item.moduleVideoUrl}
          imgVideo={item.moduleVideoImg}
          availableTime={item.moduleVideoTimeAvailable}
          quizzText={item.moduleQuizzText}
          quizzId={item.moduleQuizzId}
          isLocked={item.isLocked == "true" ? true : false}
          quizzIsLocked={item.quizzIsLocked == "true" ? true : false}
        />
        
      ))}
    </div>
  )
}

export default ContentsVideo