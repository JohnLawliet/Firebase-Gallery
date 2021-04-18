import { useEffect, useState } from 'react'
import {db} from '../../firebase/config'

const useFirestore = collection => {
    const [docs, setDocs] = useState(null)

    // After retrieving data, it returns a function that is used to unsubscribe from the collection
    // this is used as a cleanup function so the grid isn't displayed when there are no images to display

    useEffect(() => {
        const unsub = db.collection(collection)
            .orderBy('createdAt',"desc")
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({...doc.data(), id: doc.id});
                });
                setDocs(documents);
            })

        return () => unsub()
    }, [collection])

    return {docs}
}

export default useFirestore
