import { Routes } from "@angular/router";

import { CotacaoComponent } from "./cotacao";
import { HomeComponent } from "./home/home.component";

export const SeguroResidencialRoutes: Routes = [
    {
        path: "seguro-residencial",
        component: HomeComponent
    },
    {
        path: "seguro-residencial/cotacao",
        component: CotacaoComponent
    }
]