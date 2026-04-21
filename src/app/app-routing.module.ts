import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/' , pathMatch: 'full'},
  //There is a special way to load modules in a lazy fashion, meaning they were not downloaded when first accessing the app but when first accessing the route
   {
    path: 'customers',
    loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule)
  },  
  {path: "**",  redirectTo: ''} //This is a wildcard route, meaning if the user enters a route that does not exist, redirect to the home page  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
