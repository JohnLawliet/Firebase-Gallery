import useFirestore from "../hooks/useFirestore"
import { CloseButton, GridContainer, GridImage, HeaderBar } from "./image-grid.styles"
import { useDispatch } from "react-redux";
import { addFile, addTitle } from "../../redux/imageSlice";
import { switchModal } from "../../redux/modalSlice";
import convertImgToBase64URL from '../utils/ImgUrlToBlob.util'
import { useEffect, useState } from "react";
import deleteFile from "../hooks/deletefx";

const Grid = () => {
    // 'images' is name of collection in firestore db)
    // reload isn't used here explicitly but on a delete, it is causing a render in grid
    const {docs} = useFirestore('images')
    const [reload, setReload] = useState(false)
    const dispatch = useDispatch()

    const displayPage = async (details) => {
        
        await convertImgToBase64URL(details.url, function(base64Img){
            dispatch(addFile({
                ...details,
                url:base64Img
            }))  
        });      
        dispatch(addTitle(details.name))         
        dispatch(switchModal())
    }

    const deleteImage = async (doc) => {
        console.log("details : ",doc)
        const res = await deleteFile(doc, doc.id)
        if (res) setReload(prev => !prev)
    }

    useEffect(() => { 
        
    }, [setReload])
   

    return (        
        <GridContainer >
            {
                docs && docs.map(doc => (
                    <GridImage 
                        key={doc.id} 
                        id={doc.id} 
                    >
                        <HeaderBar onClick={() => deleteImage(doc)}>
                            <CloseButton>Shit</CloseButton>
                        </HeaderBar>
                        <img 
                            onClick={() => displayPage(doc)}
                            src={doc.url} 
                            alt="uploaded pic" 
                        />
                    </GridImage>
                ))
            } 
        </GridContainer>
    )
}

export default Grid
