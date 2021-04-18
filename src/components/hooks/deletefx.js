
import { db, storage } from "../../firebase/config"

const deleteFile = async (file, id) => {  
  const collectionRef = db.collection('images').doc(id)

  const storageRef = storage.ref(file.name)
  storageRef.delete().then(() => {
      collectionRef.delete().then(() => {
        return true
      }).catch((error) => {
          console.error("Error removing document: ", error);
      });
      
    }).catch((error) => {
      console.log("error", error)
      // Uh-oh, an error occurred!
    });
}

export default deleteFile
