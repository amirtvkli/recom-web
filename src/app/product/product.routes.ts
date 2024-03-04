import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router"
import { ProductBagsComponent,ProductHomeComponent,ProductDetailComponent } from "./";

const routes: Routes =[
    {
        path: '',
        component: ProductHomeComponent
    },
    {
        path: 'bags',
        component: ProductBagsComponent
    },
    {
        path: 'bags/1',
        component: ProductDetailComponent
    }
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductRouting {}