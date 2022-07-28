import { firestore } from "../firebaseconf";
import { doc,addDoc, collection, setDoc } from "firebase/firestore";
import {useAuth} from '../Context/authContext'

export const Agregar = async (nombre,cedula,telefono,tipo, Uid) => {
  // Add a second document with a generated ID.
  try {

  // await firestore.collection("Usuarios").doc(Uid).set(user1);    
   // const docRef =  addDoc(collection(firestore,`Usuarios/${Uid}`), {
     // Nombre: nombre,
      //Cedula: cedula,
      //Telefono: telefono,
      //TipoCliente:tipo,
     // uid: Uid
    //});

    await setDoc(doc(firestore, "Usuarios", Uid), {
      Nombre: nombre,
      Cedula: cedula,
      Telefono: telefono,
      TipoCliente:tipo,
    });
    console.log("Document written with ID: "+Uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


export const AgregarP = async (nombre,hinicio,hcierre,telefono,plazas,preciohora,ubicacion, Uid) => {
  try {
    await setDoc(doc(firestore, "Parqueaderos", Uid), {
      NombreP: nombre,
      Hinicio: hinicio,
      Hcierre: hcierre,
      Telefono: telefono,
      Plazas: plazas,
      PrecioH: preciohora,
      Ubicacion: ubicacion,
    });
    console.log("Document written with ID: "+Uid);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};