import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


const routes: Routes = [
  {path:'product-list', component: ProductListComponent },
  {path:'product-edit/:id', component: ProductEditComponent},
  {path:'product-create', component: ProductCreateComponent},
  {path:'',redirectTo:'product-create',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
