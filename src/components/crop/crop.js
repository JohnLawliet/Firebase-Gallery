import React, { useEffect, useState } from "react";

import "cropperjs/dist/cropper.css";
import {CropBox, Content, LikeModalButton} from "./crops.styles"
import Action from "../actionfunction/action";
import { b64ToFile } from "../utils/b64ToFile.util";


const Crop = ({ file }) => {

    const [cropData, setCropData] = useState(null);
    const [cropper, setCropper] = useState(null);

    const getCropData = async (e) => {
        e.preventDefault()
        if (typeof(cropper) !== "undefined") {
            const res = await b64ToFile(cropper.getCroppedCanvas().toDataURL(), file.name)
            setCropData(res)
        }
    };

    useEffect(() => {
    }, [cropData])

    return (
        <Content>
            {
                cropData?
                <Action cropData={cropData} /> :                       
                    <CropBox
                        initialAspectRatio={1}
                        src={file.url}
                        viewMode={2}
                        guides={false}
                        cropBoxResizable={false}
                        minCropBoxHeight={5}
                        minCropBoxWidth={5}
                        background={false}
                        responsive={true}
                        autoCropArea={1}
                        checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                        onInitialized={(instance) => {
                        setCropper(instance);
                        }}
                    />
            }
            {
                cropData?                
                null :
                <LikeModalButton onClick={getCropData}/> 
            }
        </Content>  
    )
}

export default Crop
