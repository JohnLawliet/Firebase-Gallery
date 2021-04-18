import { Container } from "./progress-bar.styles"
import useStorage from '../hooks/useStorage'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { acceptReject } from "../../redux/extraDetSlice"
import { addFile, addFx, addImage, selectImage} from "../../redux/imageSlice"
import { switchModal } from "../../redux/modalSlice"


const ProgressBar = ({ cropData=null }) => {
    const dispatch = useDispatch()
    const image = useSelector(selectImage)
    const {url, progress} = useStorage(cropData? cropData : image)

    useEffect(() => {
        if (url && image){
            dispatch(acceptReject())  
            dispatch(addImage(null))      
        }
        else if (url && cropData){
            dispatch(addFile(null))
            dispatch(addFx(null))
            dispatch(switchModal())
        }
    }, [url, image, cropData])

    return (
        <Container style={{width:progress+'%'}}/>
    )
}

export default ProgressBar
