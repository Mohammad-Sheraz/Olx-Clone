import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";




const firebaseConfig = {
    apiKey: "AIzaSyBYesUxRz0jRSbm1I2DPgxsazs8fpiwBNI",
    authDomain: "olx-app-32cc3.firebaseapp.com",
    projectId: "olx-app-32cc3",
    storageBucket: "olx-app-32cc3.appspot.com",
    messagingSenderId: "321320749465",
    appId: "1:321320749465:web:b20d643cc636f7db07ab08",
    measurementId: "G-MKDHVEF0B9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();

export const register = async (userInfo) => {
    try {
        const { email, password, age, fullname } = userInfo;
        await createUserWithEmailAndPassword(auth, email, password)
        await addDoc(collection(db, 'users'), {
            fullname,
            age,
            email,
        });

        alert('Successfully Register');
        return true;
    } catch (e) {
        alert(e.message);
        return e
    };

};


export const LogIn = async (userInfo) => {

    try {
        const { email, password } = userInfo;
        return await signInWithEmailAndPassword(auth, email, password).then(res => {

            alert('Logged In Successfully');
            return res;
        })
    } catch (e) {
        alert(e.message);
        return e;
    }

}

export const PostData = async (userInfo) => {
    try {
        const { productName, description, image, price } = userInfo;

        const storageRef = ref(storage, `ad/${image}`);

        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, image);
        alert('image uploaded successfully!');

        const url = await getDownloadURL(storageRef);
        
        await addDoc(collection(db, 'ads'), {
            productName,
            description,
            imageUrl: url,
            price,
        });

        alert('Ad posted succesfully!');
        return true;

    } catch (e) {
        alert(e.message);
        return e;
    }
}


export async function getAds() {
    const querySnapshot = await getDocs(collection(db, 'ads'));
    const ads = [];
    querySnapshot.forEach((doc) => {
        const ad = doc.data();
        ad.id = doc.id;

        ads.push(ad)
    });

    return ads;
}
