import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReproductorComponent } from './reproductor.component';

const routes: Routes = [
  {
    path: '',
    component: ReproductorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ReproductorRoutingModule {}
