import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { CreateComponent } from './components/create/create.component';
import { ErrorComponent } from './components/error/error.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:'',component:AboutComponent},
  {path:'sobreMi',component:AboutComponent},
  {path:'proyectos',component:ProjectsComponent},
  {path:'contacto',component:ContactComponent},
  {path:'create',component:CreateComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
