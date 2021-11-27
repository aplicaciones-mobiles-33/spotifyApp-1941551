import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReproductorComponent } from './reproductor.component';
import { ReproductorRoutingModule } from './reproductor-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ReproductorComponent}]),
    ReproductorRoutingModule,
  ],
  declarations: [ReproductorComponent],
  exports: [ReproductorComponent]
})
export class ReproductorComponentModule {}
