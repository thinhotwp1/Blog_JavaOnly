import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BackendComponent } from './pages/backend/backend.component';
import { FrontendComponent } from './pages/frontend/frontend.component';
import { AboutComponent } from './pages/about/about.component';
import { DevopsComponent } from './pages/devops/devops.component';
import { DevopspageComponent } from './pages/devops/devopspage/devopspage.component';


const routes: Routes = [
   {path:'',component:HomeComponent}
  ,{path:'backend',component:BackendComponent}
  ,{path:'frontend',component:FrontendComponent}
  ,{path:'about',component:AboutComponent}
  ,{path:'devops',component:DevopsComponent}
  ,{path:'devops/:id',component:DevopspageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
