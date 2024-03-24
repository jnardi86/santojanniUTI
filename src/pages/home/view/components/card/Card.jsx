import React from 'react'
import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"
import { useModulos } from "../../../../../hooks/useModulos";
import CustomButton from '../../../../../components/customComponents/CustomButton'

const Card = ({ data }) => {
    const navigate = useNavigate();
    const {
        setModuleData
    } = useModulos();
    const {
        handleRenderModulo
    } = useHome();


    const handleNavigateToContents = (id, setModuleData, handleRenderModulo) => {
        handleRenderModulo(id, setModuleData)
        navigate('/contents')
    }

    return (
        <div className="
        max-w-[300px]
        bg-Blue text-White rounded-lg 
         mx-5 my-2 py-5 
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

            <p className="mb-3 px-5 mb-5">{data.moduleDescription}</p>
            <div className="mb-3">
                <CustomButton
                    label={"Acceder"}
                    setModuleData
                    onClick={() => handleNavigateToContents(data.id, setModuleData, handleRenderModulo)}>Acceder</CustomButton>
            </div>

        </div>
    )
}

export default Card