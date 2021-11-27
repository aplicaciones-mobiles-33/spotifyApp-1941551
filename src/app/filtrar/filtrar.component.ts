/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FirebaseDbService } from '../firebase-db.service';
import { FiltrarComponentModule } from './filtrar.module';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss'],
})
export class FiltrarComponent implements OnInit {

  constructor(private db: FirebaseDbService) { }

  canciones = [];

  artista: any[];
  nombre: any[];

  getCanciones(): void {
    this.db.obtenerCancion().subscribe(
      res => {

        this.canciones = res;
      }
    );
  }

  ngOnInit() {
    this.getCanciones();
  }
}
