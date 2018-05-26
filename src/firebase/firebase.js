import * as firebase from 'firebase'
import { Deflate } from 'zlib';
// import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default}
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// const onValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// }, (e) => {
//             console.log('Error with data fetching', e)
//         })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//       const expenses =[]
//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//       })
//     console.log(expenses)
//   })


// expenses.map((expense) => {
//     database.ref('expenses').push(expense)
// })


// database.ref('notes').push({
//     title: 'To 222do',
//     body: 'Go 22to run'
// })

// const onNameChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val()
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//     // console.log(val.name + ' is a '+val.job.title+' at '+val.job.company)
// })


// const onValueChange = database.ref().on('value', (snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     }, (e) => {
//         console.log('Error with data fetching', e)
//     })


// setTimeout(() => {
//     database.ref('age').set(24)
// }, 3500);
// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000);
// setTimeout(() => {
//     database.ref('age').set(30)
// }, 10500);



// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val)
//     })
//     .catch((e) => {
//         console.log('Error fetchinng data', e)
//     })

//   database.ref().set({
//       name: 'Koby',
//       age:18,
//       stressLevel: 6,
//       job: {
//           title: 'Software develper',
//           company: 'Google'
//       },
//       isSingle: false,
//       location: {
//           city: 'Philadelphia',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('data is saved')
//   }).catch((e) => {
//       console.log('This failed.', e)
//   })

// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// // database.ref().set('this is my data')

// // database.ref('age').set(27);

// // database.ref('location/city').set('Oskemen');

// // attributes
// // height
// // weight

// database.ref('attributes').set({height: 73, weight: 150})
// .then(() => {
//     console.log('Attributes succeded.')
// }).catch((e) => {
//     console.log('Attributes are failed: ', e)
// });


// database.ref('isSingle').remove()
// .then(() => {
//     console.log('Remove succeded')
// }).catch((e) => {
//     console.log('Remove Failed',e)
// })

// database.ref('isSingle').set(null)