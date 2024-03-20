import React from 'react'
import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"
import CustomButton from '../../../../../components/customComponents/CustomButton'

const Card = ({ data }) => {

    const {
        handleRenderModulo
    } = useHome();

    const navigate = useNavigate();

    const handleNavigateToContents = (id) => {
        handleRenderModulo(id)
        navigate('/contents')
    }

    return (
        <div className="
        max-w-[300px]
        bg-Blue text-White rounded-lg 
         mx-2 my-2 pe-2 py-2 
         flex flex-col justify-center items-center">
            <img className="w-10 pb-2" src={data.moduleIcon} alt="icon" />
            <p className="pb-10">{data.moduleNumber}</p>
            <p className="self-start ps-5 pb-2">A partir del</p>
            <div className='bg-White rounded-r-full w-[150px] 
            px-2 py-2 mb-5
            self-start'>
                <p className='text-Blue '>{data.startDate}</p>
            </div>
            <p className="mb-3">{data.moduleTitle}</p>

            <p className="mb-3">{data.moduleDescription}</p>
            <div className="mb-3">
                <CustomButton
                    label={"Acceder"}
                    onClick={() => handleNavigateToContents(data.id)}>Acceder</CustomButton>
            </div>

        </div>
    )
}

export default Card