import React from 'react'
import { useModulos } from '../../../../hooks/useModulos'
import Edit from '../../../../components/svg/Edit'
import { useNavigate } from 'react-router-dom'

const ContentsQuizz = () => {

  const { moduleData } = useModulos()
  const navigate = useNavigate()



  return (
    <div className='flex justify-center items-center w-auto h-auto mb-36 opacity-50'>
      <div className='w-[280px] h-auto bg-DarkGreen py-2 px-6 inline-flex justify-center gap-4 shadow-lightShadow rounded-r-3xl rounded-l-3xl tablet:w-[560px] laptop1:w-[768px] laptop1:py-4 laptop1:px-10 laptop1:gap-10 laptop1:mx-auto'>
      <div>
        <Edit
          width="32"
          height="32"
          color="#FAFAFA"
        />
      </div>
      <button
       className='font-poppins text-sm font-semiBold tracking-wider text-center text-White laptop1:text-3xl laptop1:font-medium'
       onClick={()=>navigate('/quizz')}
       disabled
      >
        { moduleData.quizzText } 
      </button>
      </div>
    </div>
  )
}

export default ContentsQuizz