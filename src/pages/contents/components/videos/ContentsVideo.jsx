import Play from "../../../../components/svg/Play"
import { useModulos } from "../../../../hooks/useModulos"
import VideoItem from "./VideoItem";


const ContentsVideo = () => {

  const {
    videoImg,
    videoTitleOne,
    urlVideoOne,
    videoTitleTwo,
    urlVideoTwo,
    videoTitleThree,
    urlVideoThree
  } = useModulos()

  const videos = [
    { title: videoTitleOne, url: urlVideoOne, imgVideo: videoImg },
    { title: videoTitleTwo, url: urlVideoTwo, imgVideo: videoImg },
    { title: videoTitleThree, url: urlVideoThree, imgVideo: videoImg }
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
        />
      ))}
    </div>
  )
}

export default ContentsVideo