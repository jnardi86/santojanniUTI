import React from 'react'
import CustomButton from '../../../../../components/customComponents/CustomButton'

const OradoresCard = ({ data }) => {
    return (
        <div className="w-[300px] h-[500px] bg-DarkGreen text-White rounded-lg rounded-tl-[100px] mx-5 my-2 px-4 py-10 flex flex-col justify-center items-center">
            <img className="w-[180px] h-[180px] rounded-full border-2 border-White mb-5" src={data.image} alt="Orador" />
            <h3 className="font-poppins text-center font-semiBold text-2xl text-White mb-12">{data.name}</h3>
            {/* <p className="font-poppins font-semiBold text-lg text-White pb-1">{data.cargo}</p> */}
            <p className="font-poppins font-regular text-lg text-White pb-10">{data.especialidad}</p>

            {/* <CustomButton
                style="mb-5"
                label={"Ver más"}>
            </CustomButton> */}

        </div>
    )
}

export default OradoresCard
