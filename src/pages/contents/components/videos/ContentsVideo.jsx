import { useModulos } from "../../../../hooks/useModulos"
import VideoItem from "./VideoItem";


const ContentsVideo = () => {

  const {
    moduleData
  } = useModulos()

  const videos = [
    { title: moduleData.videoTitleOne, url: moduleData.urlVideoOne, imgVideo: moduleData.videoImg, timeAvailble: moduleData.videoTimeAvailableOne, isLocked: false },
    { title: moduleData.videoTitleTwo, url: moduleData.urlVideoTwo, imgVideo: moduleData.videoImg, timeAvailble: moduleData.videoTimeAvailableTwo, isLocked: false },
    { title: moduleData.videoTitleThree, url: moduleData.urlVideoThree, imgVideo: moduleData.videoImg, timeAvailble: moduleData.videoTimeAvailableThree, isLocked: true}
  ];

  return (
    <div>
      {videos.map((video, index) => (
        
        <VideoItem
          key={index}
          title={video.title}
          url={video.url}
          imgVideo={video.imgVideo}
          availableTime={video.timeAvailble}
          isLocked={video.isLocked}
        />
        
      ))}
    </div>
  )
}

export default ContentsVideo