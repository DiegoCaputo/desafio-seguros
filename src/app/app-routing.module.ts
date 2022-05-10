import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguroResidencialRoutes } from './seguro-residencial/seguro-residencial-routing.module';

const routes: Routes = [{
    path: "",
    redirectTo: "seguro-residencial",
    pathMatch: "full"
  },
  ...SeguroResidencialRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
