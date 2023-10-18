import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCS16ONoLaiBTJq2bbiwxf-tN8GD6T3Mds",
    authDomain: "devter-a5a36.firebaseapp.com",
    projectId: "devter-a5a36",
    storageBucket: "devter-a5a36.appspot.com",
    messagingSenderId: "114883038384",
    appId: "1:114883038384:web:84d94738458c0bc9db7f75",
    measurementId: "G-N7G3VD1BP3",
};

// Inicilizamos Firebase
initializeApp(firebaseConfig);

const mapUserFromStateChanged = ({ email, displayName, photoURL }) => ({
    email,
    displayName,
    photoURL,
});

// metodo para escuchar si estamos logueados.
export const onAuthStateChanged = (onChange) => {
    // como la funcion mapUserFromFirebaseAuth recibe el user, es decir lo que mandamos es lo que se usa
    // se puede simplificar llamando la funcion y ya implicitamente se le manda el user.(las funcions son de primera clase)
    return getAuth().onAuthStateChanged((user) => {
        const normalizedUser = mapUserFromStateChanged(user);
        onChange(normalizedUser);
    });
};

export const loginWithGitHub = () => {
    // Se inicializa un githubprovider.
    const githubProvider = new GithubAuthProvider();
    // se setea con el setCustomParameters la configuracion del firebase.
    githubProvider.setCustomParameters(firebaseConfig);
    // se crea un auth llamando al metodo getAutg.
    const auth = getAuth();
    // se ejecuta la promesa signInWithPopup para hacer el login.
    // Al ejecutarse el signInWithPopup, se ejecutaria inmediatamente el getAuth().onAuthStateChanged
    // alli resolveria el retornaria el usuario.
    return signInWithPopup(auth, githubProvider);
};
