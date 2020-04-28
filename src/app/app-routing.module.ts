import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ShellComponent } from './features/home/shell/shell.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'product', loadChildren: () => import('./features/product/product.module').then(m => m.ProductModule) },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
