import { LawnService } from './services/lawn.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewLawnComponent } from './components/view-lawn/view-lawn.component';
import { ViewApplicationComponent } from './components/view-application/view-application.component';
import { EditApplicationComponent } from './components/edit-application/edit-application.component';
import { EditLawnComponent } from './components/edit-lawn/edit-lawn.component';
import { AddLawnComponent } from './components/add-lawn/add-lawn.component';
import { AddApplicationComponent } from './components/add-application/add-application.component';

const appRoutes: Routes = [
  {
    path: 'lawns',
    component: ViewLawnComponent
  },
  {
    path: 'lawns/:id',
    component: ViewApplicationComponent
  },
  {
    path: '',
    redirectTo: '/lawns',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ViewLawnComponent,
    ViewApplicationComponent,
    EditApplicationComponent,
    EditLawnComponent,
    AddLawnComponent,
    AddApplicationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [LawnService],
  bootstrap: [AppComponent]
})
export class AppModule { }
