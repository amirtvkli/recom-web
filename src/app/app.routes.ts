import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'product',
    loadChildren:()=>
        import('./product/product.module').then(
            a=>a.ProductModule
        )
}];
