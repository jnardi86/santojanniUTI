import React from 'react'
import videoImgDesktop from "./Images_figma/fondo_video_max.png"
import marcoVideo from "./Images_figma/marco_video_max.png"
import { useModulos } from '../../../../../hooks/useModulos'

const HomeVideo = () => {
  const { desktopView } = useModulos()

  return (
    <div className='
    w-full mb-20 p-5 
    h-[500px] 
    flex flex-col items-center justify-around
    laptop1:flex-row justity-around 
    desktop:h-[620px] px-10'
      style={{
        backgroundImage: `url(${desktopView ? videoImgDesktop : videoImgDesktop})`
        , backgroundSize: 'cover'
        , backgroundPosition: 'left'
      }}>
      <img className=" tablet:w-[590px] desktop:w-[690px]" src={marcoVideo} alt="Hero Image" />
      <div>
        <p className='px-10 text-White laptop1:text-Blue'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sed, dignissimos porro eveniet, exercitationem quisquam eaque deserunt, hic fuga officiis nobis ullam et magnam iusto praesentium ad animi soluta.</p>
      </div>
    </div>

  )
}

export default HomeVideo
