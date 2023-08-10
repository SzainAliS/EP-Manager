import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppinglistComponent } from './shopping/shoppinglist/shoppinglist.component';

const routes: Routes = [
  {component:ShoppinglistComponent, path:'shopping-list'},
  {path:'',redirectTo:'/shopping-list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
