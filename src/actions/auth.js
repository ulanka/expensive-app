import {firebase, googleAuthProvider} from '../firebase/firebase';

export const startLogin = () => {
    return () => {
        googleAuthProvider.addScope('profile');
        googleAuthProvider.addScope('email');
        return firebase.auth().signInWithRedirect(googleAuthProvider)
    }
}