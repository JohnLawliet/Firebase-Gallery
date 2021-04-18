import {useEffect, useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useSpring, animated} from 'react-spring'
import {acceptReject} from '../../redux/extraDetSlice'

import {Container, Background, ModalWrapper,DataContent, CloseModalButton, LikeModalButton, Content, ImageContent, Title, Details, CropButton} from './modal.styles'
import { selectModal, switchModal } from '../../redux/modalSlice'
import { addFile, addFx, addImage, addTitle, selectFile, selectFx, selectImage } from '../../redux/imageSlice'
import Crop from '../crop/crop'



const Modal = ({type=null}) => {
    const dispatch = useDispatch()
    const showCloseMd = useSelector(selectModal) 

    // crop function
    const fx = useSelector(selectFx)
    
    // for display phase
    const file = useSelector(selectFile)
    const timestamp = file?.createdAt?.toDate()?.toDateString()
    const [displayLike, setDisplayLike] = useState(true)

    // vars for upload phase only
    const image = useSelector(selectImage)
    const [title, setTitle] = useState(null)
    const [show, setShow] = useState(null)
    const buttonRef = useRef()

    const modalRef= useRef()
    const animation = useSpring({
        config: {
            duration:500
        },
        opacity: showCloseMd? 1: 0,
        transform: showCloseMd ? `translateY(0%)` : `translateY(-100%)`
    })

    const closeNullifyValues = () => {
        type==="upload"?
        dispatch(addImage(null)) :
        dispatch(addFile(null))

        dispatch(addFx(null))
        dispatch(switchModal())  
    }

    const closeModal = (e) => {   
        if (modalRef.current === e.target)
            closeNullifyValues() 
    }

    const closeByIcon = () => {
        closeNullifyValues() 
    }

    const acceptImage = (e) => {
        e.preventDefault()
        title?
        dispatch(addTitle(title)) :
        dispatch(addTitle(image.name))
        dispatch(acceptReject())

        dispatch(switchModal())
    }

    useEffect(() => {
        if (fx === "crop"){
            setDisplayLike(false) 
        }
        else{
            if (type==="upload"){
                setDisplayLike(true)
                const reader = new FileReader()
                reader.onloadend = () => {
                    setShow(reader.result)
                }
                reader.readAsDataURL(image)
            }
            else if (type==="display"){
                setDisplayLike(false)
                dispatch(addImage(null))
                
                setShow(file.url)
            }
        }
    }, [fx, setDisplayLike, setShow, image])

    return (
        <>
        {
            showCloseMd?
            <Container>
            <Background ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                <ModalWrapper>    
                {   
                    fx==="crop"?
                    <Crop file={file}/> :
                    <Content>
                        <ImageContent 
                            src={show} alt="uploaded pic"
                            type={type}
                        />
                        {
                            type==="upload"?
                            <form>
                            <DataContent type={type}>
                                <Title 
                                    type="text" 
                                    placeholder="Enter title"
                                    onChange={e => setTitle(e.target.value)}
                                />
                                <button 
                                    type="submit"
                                    style={{display:"none"}}
                                    ref={buttonRef}
                                    onClick={acceptImage}
                                >
                                </button>
                            </DataContent>
                            </form> :
                            <DataContent type={type}>
                                <Details>{file.name}</Details>
                                <Details><time>{timestamp}</time></Details>
                                <Details>
                                    <CropButton onClick={() => dispatch(addFx("crop"))}>Crop Mode</CropButton>
                                </Details>
                            </DataContent>
                        }
                    </Content>
                }                
                <CloseModalButton
                    aria-label="Close modal"
                    onClick={closeByIcon}
                />     
                {
                    displayLike?
                    <LikeModalButton onClick={() => buttonRef.current.click()} /> :
                    null
                }              
                </ModalWrapper>
                </animated.div>
            </Background>
            </Container>
            : null
        }
        </>
    )
}

export default Modal
