import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, query, where } from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
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
        const userRes = await createUserWithEmailAndPassword(auth, email, password)
        await addDoc(collection(db, 'users'), {
            fullname,
            age,
            email,
            UID: userRes?.user?.uid
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
        return await signInWithEmailAndPassword(auth, email, password).then(async res => {
            console.log("🚀 ~ returnawaitsignInWithEmailAndPassword ~ res:", res)
            const usersCollection = collection(db, 'users');
            const userQuery = query(usersCollection, where('UID', '==', 'rXUXv4wMi7Yc7gyPPYc5CCFrfxm1'));
            const userSnapshot = await getDocs(userQuery);
            console.log("🚀 ~ returnawaitsignInWithEmailAndPassword ~ userQuery:", userSnapshot)
            alert('Logged In Successfully');
            return res;
        })
    } catch (e) {
        alert(e.message);
        return e;
    }

}

export const LogoutFirebase = async () => {
    try {
        await signOut(auth)
        alert('Logged out successfully!');
    } catch (e) {
        alert(e.message);
    }
}

export const PostData = async (userInfo) => {
    console.log("🚀 ~ PostData ~ userInfo:", userInfo)
    try {
        const { productName, description, images, price } = userInfo;

        const storageRef = ref(storage, `ad/${images[0].name}`);
        const storageRef2 = ref(storage, `ad/${images[1].name}`);
        const storageRef3 = ref(storage, `ad/${images[2].name}`);



        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, images[0]);
        // alert('images uploaded successfully!');
        await uploadBytes(storageRef2, images[1]);

        await uploadBytes(storageRef3, images[2]);



        const url = await getDownloadURL(storageRef);
        const url2 = await getDownloadURL(storageRef2);
        const url3 = await getDownloadURL(storageRef3);



        await addDoc(collection(db, 'ads'), {
            productName,
            description,
            imageUrl: [url, url2, url3],
            price,
        });

        alert('Ad posted succesfully!');
        // return true;

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


export async function uploadpfp(pfpimage) {
    const { pfpImg } = pfpimage

    try {

        const storageRef = ref(storage, `profilepictures / ${pfpImg.name}`);
        await uploadBytes(storageRef, pfpImg)
        const pfpURl = await getDownloadURL(storageRef)

        const docRef = await addDoc(collection(db, "userpfps"), {
            pfpURl,

        });
    } catch (e) {
        alert(e.message)
    }

}


export async function getpfps() {

    const querySnapshot = await getDocs(collection(db, "userpfps"));
    const pfpIMG = []
    querySnapshot.forEach((doc) => {


        pfpIMG.push(doc.data())
    });
    return pfpIMG

}


export async function getSingleProduct(detailID) {

    const docRef = doc(db, "ads", detailID);
    const docSnap = await getDoc(docRef);
    const productData = docSnap.data()

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        console.log("No such document!");
    }
    return productData;

}

