import { Injectable } from '@angular/core';

//importamos los módulos para DB con firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//importamos nuestro modelo
import { Proveedores } from './proveedores.model';

@Injectable({
  providedIn: 'root'
})

export class ProveedoresService {

  constructor( private angularFirestore: AngularFirestore) { }

  //métodos para el CRUD
getProveedores() {
  return this.angularFirestore
          .collection("proveedores")
          .snapshotChanges()
}

getProveedorById(id) {
  return this.angularFirestore
          .collection("proveedores")
          .doc(id)
          .valueChanges()
}

createProveedor(proveedores: Proveedores){
  return new Promise<any> ( ( resolve, reject ) => {
    this.angularFirestore
      .collection("proveedores")
      .add(proveedores)
      .then( (response) => {
        console.log(response)
      },
      (error) => {
        reject(error)

      })
  })
}

updateProveedor(proveedores: Proveedores, id){
  return this.angularFirestore
    .collection("proveedores")
    .doc(id)
    .update({
      nombre: proveedores.nombre,
      ruc: proveedores.ruc,
      monto: proveedores.monto,
      concepto: proveedores.concepto,
      fecha: proveedores.fecha
    });
}

deleteProveedor(proveedores){
  return this.angularFirestore
    .collection("proveedores")
    .doc(proveedores.id)
    .delete();
}
}
