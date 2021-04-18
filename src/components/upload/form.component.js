import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Modal from "../modal/modal"
import ProgressBar from "../progress-bar/progress-bar"
import { Error, File, Output, Label, InputForm } from "./form.styles"
import {switchModal} from '../../redux/modalSlice'
import { addImage, selectImage } from "../../redux/imageSlice"
import { selectLike } from "../../redux/extraDetSlice"


const Form = () => {
    const dispatch = useDispatch()
    const like = useSelector(selectLike)
    const image = useSelector(selectImage)

    const [error, setError] = useState(null)
    const ResultType = error ? Error : File


    const changeHandler = (e) => {
        const selected = e.target.files[0] 
        // image data is taken as blob. Blobs are immutable unserializable data which can be read via FileReader only. Redux will not accept
        // blob in any way. Best method is to use createObjectURL which creates a local URL to the blob and that can be dispatched and
        // used elsewhere in the program https://medium.com/@gabriele.cimato/on-how-to-store-an-image-in-redux-d623bcc06ca7

        if (selected && selected.type.substr(0,5)==="image"){
            dispatch(addImage(selected))
            dispatch(switchModal())
            setError(null)
        }
        else
            setError("Please choose an image file")
    }

    return (
        <InputForm>
            <Label>
                <input 
                    type="file" 
                    accept="image/*"
                    onChange={changeHandler}
                />
                <span>+</span>
            </Label>
            <Output>
                <ResultType>                
                {
                    image?                            
                        <Modal type="upload"/>                    
                    : null
                }                       
                {
                    image && like &&
                    <ProgressBar 
                    />
                }
                   
                </ResultType>
            </Output>
        </InputForm>
    )
}

export default Form
