import React from 'react'
import { useNavigate } from "react-router-dom"
import { useHome } from "../../useHome"
import CustomButton from '../../../../../components/customComponents/CustomButton'

const Card = ({ id, title, description }) => {

    const {
        handleRenderModulo
    } = useHome();

    const navigate = useNavigate();

    const handleNavigateToContents = (id) => {
        handleRenderModulo(id)
        navigate('/contents')
    }

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
            <CustomButton
                label={"Acceder"}
                onClick={() => handleNavigateToContents(id)}>Acceder</CustomButton>
        </div>
    )
}

export default Card