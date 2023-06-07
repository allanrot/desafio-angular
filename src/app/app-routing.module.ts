import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovaAdmissaoCooperadoComponent } from './pages/nova-admissao-cooperado/nova-admissao-cooperado.component';


const routes: Routes = [
  { path: '', component: NovaAdmissaoCooperadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
