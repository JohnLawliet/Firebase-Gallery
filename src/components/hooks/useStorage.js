import { useState, useEffect } from "react"
import { storage, db, timestamp } from "../../firebase/config"
import { useSelector } from "react-redux"
import { selectTitle } from "../../redux/imageSlice"
    

const useStorage = (file) => {
    const name = useSelector(selectTitle)

    const [progress,setProgress] = useState(null)
    const [error,setError] = useState(null)
    const [url,setUrl] = useState(null)
    const collectionRef = db.collection('images')

    // .put is a firebase function used to put the file onto the storage reference
    // in firebase. on() is a listener that listens to state change event and does an action
    useEffect(() => {
        const storageRef = storage.ref(name)
        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred /snap.totalBytes) * 100
            setProgress(percentage)
        }, err => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL()
            const createdAt = timestamp()
            collectionRef.add({ url, createdAt, name })
            setUrl(url)
        })

    }, [file])

    return {error, progress, url}
}

export default useStorage
