import React from 'react'
import CustomButton from '../../../../../components/customComponents/CustomButton'

import Swal from 'sweetalert2'



const OradoresCard = ({ data }) => {

    const showAlert = () => {
        Swal.fire({
            html: `
            <div style="display: flex; flex-direction: column; align-items: center; text-align: center;">
            <img style="width: 180px; height: 180px; border-radius: 50%; border: 2px solid #FFFFFF; margin-bottom: 10px;" src="${data.image}" alt="Orador" />
            <h3 style="font-family: Poppins; font-size: 24px; font-weight: 600; text-align: center; margin-bottom: 20px;">${data.name}</h3>
            <h6 style="font-family: Poppins; font-size: 20px; font-weight: 500; text-align: center; margin-bottom: 20px;">${data.especialidad}</h6>
            <p style="font-family: Poppins; font-size: 18px; text-align: center; margin-bottom: 30px;">${data.cargo}</p>
            </div>
            `,
            background: "#FAFAFA",
            color: "#011C40",
            confirmButtonText: "Volver",
            confirmButtonColor: "#038C7F"
        });
    }



    return (
        <div className="w-[300px] h-[500px] bg-DarkGreen text-White rounded-lg rounded-tl-[100px] mx-5 my-2 px-4 py-10 flex flex-col justify-between items-center">
            <img className="w-[180px] h-[180px] rounded-full border-2 border-White mb-5" src={data.image} alt="Orador" />
            <div className='h-20 w-full text-center flex items-center justify-center'>
                <h3 className="font-poppins font-semiBold text-2xl text-White mb-12">{data.name}</h3>
            </div>
            {/* <p className="font-poppins font-semiBold text-lg text-White pb-1">{data.cargo}</p> */}
            <p className="font-poppins font-regular text-lg text-White pb-10">{data.especialidad}</p>
            <div className='h-20 w-full text-center flex items-center justify-center'>
                <CustomButton
                    style="py-2 px-5 bg-White font-poppins text-lg font-regular text-DarkGreen hover:bg-Blue hover:text-White font-semibold rounded-md"
                    label={"Ver más"}
                    onClick={showAlert}
                >
                </CustomButton>
            </div>


        </div>
    )
}

export default OradoresCard
