import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


// CODIGO PARA AGREGAR PRODUCTOS A LA COLLECTION DESDE UN ARRAY
// async function addProductsToFirestore() {
//   const productsCollectionRef = collection(db, "products");

//   for (const product of products) {
//     await addDoc(productsCollectionRef, product);
//   }
// }

// addProductsToFirestore();