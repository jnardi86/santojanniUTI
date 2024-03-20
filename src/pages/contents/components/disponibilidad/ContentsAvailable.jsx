import Calendar from "../../../../components/svg/Calendar"
import { useModulos } from "../../../../hooks/useModulos"


const ContentsAvailable = () => {

  const { textAvailable } = useModulos()

  return (
    <div className="availableContainer w-full h-auto mb-[70px] laptop1:px-20">
      <div className="availableContainer-text w-[335px] h-[40px] bg-Cyan border-solid border-2 border-Cyan rounded-r-full py-2 px-4 shadow-lightShadow">
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

export default ContentsAvailable