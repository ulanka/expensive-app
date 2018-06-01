import { firebase} from '../firebase/firebase';

export const  login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        // googleAuthProvider.addScope('profile');
        // googleAuthProvider.addScope('email');
        // googleAuthProvider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        return firebase.auth().signInWithEmailAndPassword('ulan.korabay@gmail.com', 'ekfy3103').then((result)=> {
            
            console.log('fff')
        }).catch((error) =>{
            console.log('fff', error)
        })
    }
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}