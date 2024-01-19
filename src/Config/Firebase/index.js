import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";


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
const auth = getAuth(app);
const db = getFirestore(app);


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
            console.log("🚀 ~ returnawaitsignInWithEmailAndPassword ~ res:", res);


            alert('Logged In Successfully');
            return res;
        })
    } catch (e) {
        alert(e.message);
        return e;
    }

}

export const PostData = async (userInfo) => {
    console.log("🚀 ~ PostData ~ userInfo:", userInfo);
    try {
        const { productName, description, quantity, price } = userInfo;
        await addDoc(collection(db, 'users'), {
            productName,
            description,
            quantity,
            price,
        });

        alert('Successfully Post Ad');
        return true;
    } catch (e) {
        alert(e.message);
        return e;
    };

}
