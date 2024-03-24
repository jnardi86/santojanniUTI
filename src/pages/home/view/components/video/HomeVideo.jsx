import React from 'react'
import videoImgDesktop from "../../../../../assets/Images_figma/fondo_video_max.png"
import marcoVideo from "../../../../../assets/Images_figma/marco_video_max.png"
import { useModulos } from '../../../../../hooks/useModulos'

const HomeVideo = () => {
  const { desktopView } = useModulos()

  return (
    <div className='w-full mb-20 h-[620px] tablet:h-[500px] desktop:h-[620px] flex items-center ps-10'
      style={{
        backgroundImage: `url(${desktopView ? videoImgDesktop : videoImgDesktop})`
        , backgroundSize: 'cover'
        , backgroundPosition: 'center'
      }}>
      <img className=" tablet:w-[590px] desktop:w-[690px]" src={marcoVideo} alt="Hero Image" />
      <p className='px-10'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id deleniti sed, dignissimos porro eveniet, exercitationem quisquam eaque deserunt, hic fuga officiis nobis ullam et magnam iusto praesentium ad animi soluta.</p>
    </div>

  )
}

export default HomeVideo
