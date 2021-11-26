/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDbService {

  constructor(
    private http: HttpClient,
    private fdbd: AngularFireDatabase
  ) { }

  resArray = [];

  obtenerCancion(){
    this.http.get('https://spotifyapp-d0f16-default-rtdb.firebaseio.com/Canciones.json').subscribe(
      respuesta => {
        console.log(respuesta);
      }
    );
  }
}
