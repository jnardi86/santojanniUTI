import React from 'react'
import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"
import { useModulos } from "../../../../../hooks/useModulos";
import CustomButton from '../../../../../components/customComponents/CustomButton'
import Calendar from '../../../../../components/svg/Calendar';

const Card = ({ data }) => {
    const navigate = useNavigate();
    const {
        setModuleDataLocalStorage,
        MODULE_ID
    } = useModulos();


    // const handleNavigateToContents = (id, setModuleData, handleRenderModulo) => {
    // handleRenderModulo(id, setModuleData)

    const handleNavigateToContents = (id) => {
        setModuleDataLocalStorage(MODULE_ID, id)
        navigate('/contents')
    }

    return (
        <div className="max-w-[300px] bg-Blue text-White rounded-lg mx-5 my-2 py-5 flex flex-col justify-between items-center overflow-hidden">
            <img className="w-10 pb-4" src={data.moduleIcon} alt="icon" />
            <h2 className="font-poppins text-4xl font-medium text-White text-center pb-10">{data.moduleNumber}</h2>
            <p className="w-full font-poppins text-base font-regular text-start pl-5 pb-2">A partir del</p>
            <div className='w-full'>
                <div className='bg-White rounded-r-full w-[250px] p-2 mb-5 flex items-center gap-3'>
                    <span>
                        <Calendar
                            width="32px"
                            height="32px"
                            color="#011C40"
                        />
                    </span>
                    <p className='font-poppins text-2xl font-semiBold text-Blue '>{data.startDate}</p>
                </div>
            </div>
            <div className='w-full h-16 flex justify-center items-center mt-6'>
                <h2 className="font-poppins text-4xl text-White font-medium mb-3 text-center">{data.moduleTitle}</h2>
            </div>
            <div className='w-full h-60 flex justify-center items-start'>
                <p className="font-poppins text-sm text-White font-thin my-5 p-5">{data.moduleDescription}</p>
            </div>
            <div className="mb-3">
                <CustomButton
                    type={"button"}
                    label={"Acceder"}
                    setModuleData
                    onClick={() => handleNavigateToContents(data.id)}></CustomButton>
            </div>
        </div>
    )
}

export default Card