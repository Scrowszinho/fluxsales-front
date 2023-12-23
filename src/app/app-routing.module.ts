import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule)},
  {path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)},
  {path: 'profile', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
