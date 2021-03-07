import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
 { path:'',component:AppComponent,children:[
  {
    path:'',loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'dashboard',loadChildren:() => import('./page/page.module').then(m => m.PageModule)  
  },
  {
    path:'**',component:PageNotFoundComponent
  }
 ]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
