import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BackendComponent } from './pages/backend/backend.component';
import { FrontendComponent } from './pages/frontend/frontend.component';
import { AboutComponent } from './pages/about/about.component';
import { DevopsComponent } from './pages/devops/devops.component';
import { DevopspageComponent } from './pages/devops/devopspage/devopspage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BackendComponent,
    FrontendComponent,
    AboutComponent,
    DevopsComponent,
    DevopspageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
