export const firebaseConfig = {  //Se encuentra al agregar una página Web en firebase
  apiKey: "AIzaSyAhYKqLAjnjmzTuaz3MGC55-13WK-SkWBI",
  authDomain: "basinfo-552d3.firebaseapp.com",
  databaseURL: "https://basinfo-552d3.firebaseio.com",
  projectId: "basinfo-552d3",
  storageBucket: "basinfo-552d3.appspot.com",
  messagingSenderId: "889566051333"
};

export const webClientId = '889566051333-jc2s2lmr1jcrku1of6dr6cm0tskj4rsj.apps.googleusercontent.com'; //Se encuentra en firebase Authentication -> Google

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });

  return returnArr;
};