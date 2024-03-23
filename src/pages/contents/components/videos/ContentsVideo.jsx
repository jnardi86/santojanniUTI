import { useModulos } from "../../../../hooks/useModulos"
import VideoItem from "./VideoItem";


const ContentsVideo = () => {

  const {
    videoImg,
    videoTitleOne,
    urlVideoOne,
    videoTimeAvailableOne,
    videoTitleTwo,
    urlVideoTwo,
    videoTimeAvailableTwo,
    videoTitleThree,
    urlVideoThree,
    videoTimeAvailableThree
  } = useModulos()

  const videos = [
    { title: videoTitleOne, url: urlVideoOne, imgVideo: videoImg, timeAvailble: videoTimeAvailableOne, isLocked: false },
    { title: videoTitleTwo, url: urlVideoTwo, imgVideo: videoImg, timeAvailble: videoTimeAvailableTwo, isLocked: false },
    { title: videoTitleThree, url: urlVideoThree, imgVideo: videoImg, timeAvailble: videoTimeAvailableThree, isLocked: true}
  ];

  return (
    <div>
      {videos.map((video, index) => (
        // <VideoItem key={index} title={video.title} url={video.url} />
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