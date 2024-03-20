import { useModulos } from "../../../../hooks/useModulos"


const ContentsVideo = () => {

  const { 
    videoTitleOne,
    urlVideoOne,
    videoTitleTwo,
    urlVideoTwo,
    videoTitleThree,
    urlVideoThree
   } = useModulos()

  return (
    <div className="videoContainer w-full h-auto mb-[70px] laptop1:px-20">
    <div className="videoContainer-title w-[335px] h-[40px] bg-Cyan border-solid border-2 border-Cyan rounded-r-full py-2 px-4 shadow-lightShadow">
      <div className="flex gap-2">
        <Calendar 
          width='24'
          height='24'
          color='#011C40'
        />
      <p className="font-poppins text-sm font-semiBold">{textAvailable}</p>
      </div>
    </div>
  </div>
  )
}

export default ContentsVideo