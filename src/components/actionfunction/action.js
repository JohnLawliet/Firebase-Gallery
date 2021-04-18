import ProgressBar from "../progress-bar/progress-bar"
import { useEffect, useState } from "react"
import deleteFile from "../hooks/deletefx"
import { useSelector } from "react-redux"
import { selectFile } from "../../redux/imageSlice"
import { ActionContainer, ActionWrapper } from "./action.styles"



const Action = ({ cropData }) => {
    const fileFromDb = useSelector(selectFile)
    const [completed, setCompleted] = useState(false)

    useEffect(() => {
        const fx = async () => {
            return await deleteFile(cropData, fileFromDb.id)
        }
        setCompleted(fx)
    }, [setCompleted])

    return (
        <ActionContainer>
            {
                completed?
                <ActionWrapper>
                    <span>...Cropping...</span>
                    <ProgressBar cropData={cropData}/> 
                </ActionWrapper>:
                null                
            }
        </ActionContainer>
    )
}

export default Action
