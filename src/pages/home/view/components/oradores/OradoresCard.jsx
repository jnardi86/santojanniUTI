import React from 'react'
import CustomButton from '../../../../../components/customComponents/CustomButton'

const OradoresCard = ({ data }) => {
    return (
        <div className="
    min-w-[260px]
    bg-DarkGreen text-White rounded-lg rounded-tl-[100px] 
     mx-5 my-2 px-4 py-4 
     flex flex-col justify-center items-center">
            <img className="w-[180px] h-[180px] rounded-full self-start border-2 border-White mb-5" src={data.image} alt="Orador" />
            <p className="pb-10">{data.name}</p>
            <p className="pb-1">{data.cargo}</p>
            <p className="pb-10">{data.especialidad}</p>

            <CustomButton
            style="mb-5"
            label={"Ver más"}>
            </CustomButton>

        </div>
    )
}

export default OradoresCard
