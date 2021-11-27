import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FiltrarComponent } from './filtrar.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  //  RouterModule.forChild([{ path: '', component: PublicacionComponent }]),
  ],
  declarations: [FiltrarComponent],
  exports: [FiltrarComponent]
})
export class FiltrarComponentModule {}
